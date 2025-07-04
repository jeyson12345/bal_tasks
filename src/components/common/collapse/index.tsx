import { Collapse, CollapseProps, ConfigProvider } from 'antd';
import { colors } from 'src/constants/theme';

interface Props extends CollapseProps {}

function CustomCollapse({ ...rest }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 16,
        },
        components: {
          Collapse: {
            borderRadius: 30,
            headerBg: colors.gray3,
            headerPadding: '24px 64px',
            contentPadding: '0px 64px 48px 64px',
          },
        },
      }}
    >
      <Collapse {...rest} />
    </ConfigProvider>
  );
}

export default CustomCollapse;
