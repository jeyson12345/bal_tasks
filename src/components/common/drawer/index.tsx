import { ConfigProvider, Drawer, DrawerProps } from 'antd';
import { CloseCircle } from 'iconsax-react';
import { colors } from 'src/constants/theme';

interface Props extends DrawerProps {
  bg?: string;
}

export default function CustomDrawer({ bg, ...rest }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorBgElevated: bg || colors.dark_bg,
        },
        components: {
          Drawer: {},
        },
      }}
    >
      <Drawer
        closeIcon={<CloseCircle color={colors.white} size={16} />}
        {...rest}
      />
    </ConfigProvider>
  );
}
