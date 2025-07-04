import { Button, ButtonProps, ConfigProvider } from 'antd';
import { MarginTypes, colors } from 'src/constants/theme';

type CombinedProps = ButtonProps & MarginTypes;

interface Props extends CombinedProps {
  bg?: string;
  width?: React.CSSProperties['width'];
  height?: number;
  borderColor?: React.CSSProperties['borderColor'];
  textColor?: React.CSSProperties['color'];
}

export default function CustomButton({
  bg,
  width,
  height = 46,
  borderColor = colors.gray3,
  textColor = colors.primary,
  m,
  mt,
  mb,
  ml,
  mr,
  style,
  ...rest
}: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: bg,
          colorBorder: borderColor,
        },
        components: {
          Button: {
            controlHeight: height,
            paddingContentHorizontal: 30,
            colorText: textColor,
          },
        },
      }}
    >
      <Button
        {...rest}
        style={{
          width,
          margin: m,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          ...style,
        }}
      />
    </ConfigProvider>
  );
}
