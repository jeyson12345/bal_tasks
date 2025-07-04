import { Avatar, Layout, Menu, Select, Table, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useParamsHook from 'src/hooks/params';
import {
  useGetTasksQuery,
  useGetUsersQuery,
  useUpdateStatusMutation,
} from 'src/app/services/users';
import PaginationFilter from 'src/components/common/PaginationFilter';

const { Header, Content } = Layout;

const HomePage = ({ taskPage = false }: { taskPage?: boolean }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { searchParams, navigate } = useParamsHook();

  // GET users
  const { data: users, isLoading: sLoad } = useGetUsersQuery(
    searchParams.toString(),
    {
      skip: taskPage,
    }
  );

  // GEt tasks
  const { data: tasks, isLoading: tLoad } = useGetTasksQuery(
    searchParams.toString(),
    {
      skip: !taskPage,
    }
  );
  // Update task status
  const [updateStatus, { isLoading: uLoad }] = useUpdateStatusMutation();

  const columns = [
    {
      title: 'Yaratuvchi nomi',
      dataIndex: 'created_by_name',
      key: 'created_by_name',
    },
    {
      title: 'Sana',
      dataIndex: 'created_date',
      key: 'created_date',
      render: (val: any) => new Date(val).toLocaleDateString(),
      align: 'center' as const,
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline_days',
      key: 'deadline_days',
      render: (val: any) => `${val} kun qoldi`,
      align: 'center' as const,
    },
    {
      title: 'Matn',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Status',
      dataIndex: 'status_display',
      key: 'status_display',
    },
    {
      title: 'Statusni yangilash',
      key: 'status',
      render: (_: any, record: any) => (
        <Select
          onSelect={(val) =>
            updateStatus({ id: record?.id, body: { status: val } })
          }
          style={{ width: 150 }}
          value={record?.status}
          options={[
            { label: 'Yangi', value: 'new' },
            { label: 'Jarayonda', value: 'in_progress' },
            { label: 'Yakunlandi', value: 'completed' },
            { label: 'Bekor qilindi', value: 'cancelled ' },
          ]}
        />
      ),
    },
  ];
  const columnsUsers = [
    {
      title: 'Familya, Ism, Sharifi',
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title: 'Telegram ID',
      dataIndex: 'telegram_id',
      key: 'telegram_id',
      align: 'center' as const,
    },

    {
      title: 'Status',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (val: any) => (val ? 'Aktiv' : 'Aktiv emas'),
    },
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={taskPage ? ['tasks'] : ['users']}
          items={[
            { key: 'users', label: 'Foydalanuvchilar' },
            { key: 'tasks', label: 'Topshiriqlar' },
          ]}
          style={{ flex: 1, minWidth: 0 }}
          onClick={({ key }) => navigate(`/${key}`)}
        />

        <Avatar
          size={36}
          icon={<UserOutlined />}
          style={{ backgroundColor: '#0445B1' }}
        />
      </Header>

      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            margin: '16px 0',
            padding: 24,
            height: 'calc(100% - 64px)',
            borderRadius: borderRadiusLG,
            background: colorBgContainer,
            overflowY: 'scroll',
          }}
        >
          <Table
            rowKey={'id'}
            pagination={false}
            loading={tLoad || uLoad || sLoad}
            columns={taskPage ? columns : columnsUsers}
            dataSource={taskPage ? tasks?.results : users?.results}
          />

          <PaginationFilter total={taskPage ? tasks?.count : users?.count} />
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
