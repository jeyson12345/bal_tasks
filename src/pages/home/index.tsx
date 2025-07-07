import {
  Avatar,
  Drawer,
  Empty,
  Flex,
  Layout,
  Menu,
  Segmented,
  Select,
  Table,
  theme,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useParamsHook from 'src/hooks/params';
import {
  useGetTaskIDQuery,
  useGetTasksQuery,
  useGetUsersQuery,
  useUpdateStatusMutation,
} from 'src/app/services/users';
import PaginationFilter from 'src/components/common/PaginationFilter';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Header, Content } = Layout;

const HomePage = ({ taskPage = false }: { taskPage?: boolean }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { searchParams, navigate, handleMakeParams } = useParamsHook();

  // GET users
  const { data: users, isLoading: sLoad } = useGetUsersQuery(
    searchParams.toString()
  );
  const [taskID, setTaskID] = useState<number | null>(null);
  const { data: taskDetail, isLoading: taskLoad } = useGetTaskIDQuery(
    String(taskID),
    {
      skip: !taskID,
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
      render: (val: any, record: any) => (
        <Link to={'#'} onClick={() => setTaskID(record?.id)}>
          {val}
        </Link>
      ),
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
          <Flex
            justify="end"
            gap={16}
            style={{ marginBottom: 16 }}
            align="center"
          >
            {/* <Input.Search
              placeholder={`Matnlar, feedbacklar bo'yich qidirish`}
              enterButton="Qidirish"
              onSearch={(val) => handleMakeParams('search', val)}
              defaultValue={searchParams.get('search') || ''}
              allowClear
            /> */}

            <div style={{ flexGrow: 1 }}>
              <Segmented
                size="large"
                options={[
                  { label: 'Yangi', value: 'new' },
                  { label: 'Jarayonda', value: 'in_progress' },
                  { label: 'Yakunlandi', value: 'completed' },
                  { label: 'Bekor qilindi', value: 'cancelled ' },
                ]}
                value={searchParams.get('status') || ''}
                onChange={(val) => handleMakeParams('status', val)}
              />
            </div>

            <Select
              allowClear
              placeholder="Mas'ul shaxs !"
              onChange={(val) => handleMakeParams('responsible_user', val)}
              style={{ width: 200, flexShrink: 0 }}
              defaultValue={searchParams.get('responsible_user')}
              options={users?.results?.map((item) => ({
                label: item?.full_name,
                value: item?.id,
              }))}
            />

            <Select
              allowClear
              placeholder="Taskni kim yaratgan"
              onChange={(val) => handleMakeParams('created_by', val)}
              style={{ width: 200, flexShrink: 0 }}
              defaultValue={searchParams.get('created_by')}
              options={users?.results?.map((item) => ({
                label: item?.full_name,
                value: item?.id,
              }))}
            />
          </Flex>

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

      <Drawer
        loading={taskLoad || !taskDetail}
        width={1000}
        title="Task malumotlari"
        open={taskID ? true : false}
        onClose={() => setTaskID(null)}
      >
        <div>
          <div>
            <h2>Topshiriq matni</h2>
            {taskDetail?.text ? (
              <p style={{ marginTop: 12 }}>{taskDetail?.text}</p>
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>

          <div style={{ marginTop: 16 }}>
            <h2>Topshiriq media fayl</h2>
            {taskDetail?.media_file ? (
              renderMediaByUrl(taskDetail?.media_file)
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>

          <div style={{ marginTop: 16 }}>
            <h2>Natija matni</h2>
            {taskDetail?.result_text ? (
              <p style={{ marginTop: 12 }}>{taskDetail?.result_text}</p>
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>

          <div style={{ marginTop: 16 }}>
            <h2>Natija media</h2>
            {taskDetail?.result_media_file ? (
              renderMediaByUrl(taskDetail?.result_media_file)
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>

          <div style={{ marginTop: 16 }}>
            <h2>Feedback matni</h2>
            {taskDetail?.feedback_text ? (
              <p style={{ marginTop: 12 }}>{taskDetail?.feedback_text}</p>
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>

          <div style={{ marginTop: 16 }}>
            <h2>Feedback media</h2>
            {taskDetail?.feedback_media_file ? (
              renderMediaByUrl(taskDetail?.feedback_media_file)
            ) : (
              <Empty description="Mavjud emas" />
            )}
          </div>
        </div>
      </Drawer>
    </Layout>
  );
};

export default HomePage;

const renderMediaByUrl = (url: string): JSX.Element => {
  const videoTypes = ['.mp4', '.webm'];
  const audioTypes = ['.mp3', '.ogg'];

  const isVideo = videoTypes.some((ext) => url.endsWith(ext));
  const isAudio = audioTypes.some((ext) => url.endsWith(ext));

  if (isVideo) {
    return (
      <video controls width="100%" height="360" style={{ marginTop: 12 }}>
        <source src={url} />
        Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
      </video>
    );
  } else if (isAudio) {
    return (
      <audio controls style={{ marginTop: 12, width: '100%' }}>
        <source src={url} />
        Sizning brauzeringiz audio formatini qo‘llab-quvvatlamaydi.
      </audio>
    );
  } else {
    return (
      <p style={{ marginTop: 12 }}>
        Fayl formati qo‘llab-quvvatlanmaydi: {url}
      </p>
    );
  }
};
