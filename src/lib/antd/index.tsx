import { ConfigProvider } from 'antd';
import { colors } from 'src/constants/theme';
import { PropsWithChildren } from 'react';

function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorBgBase: colors.inputColor,
          colorBorder: colors.gray3,
          colorText: colors.gray6,
          colorTextPlaceholder: colors.gray4,
          fontSize: 16,
          fontFamily: 'Inter',
        },
        components: {
          Input: {
            borderRadius: 12,
            controlHeight: 44,
            fontSize: 15,
            paddingInline: 18,
          },
          DatePicker: {
            borderRadius: 12,
            controlHeight: 44,
            fontSize: 15,
            paddingInline: 18,
          },
          Select: {
            borderRadius: 12,
            controlHeight: 44,
            fontSize: 15,
            optionPadding: '12px 18px',
          },
          Form: {
            labelFontSize: 14,
          },
          Breadcrumb: {
            itemColor: colors.primary,
            separatorColor: colors.black,
            linkColor: colors.black,
            separatorMargin: 6,
            fontSize: 16,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
