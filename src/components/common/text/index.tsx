import { MarginTypes, colors, flexStyles } from 'src/constants/theme';

type CombinedProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes;

interface Props extends Omit<CombinedProps, 'prefix'> {
  type?: 'title' | 'subtitle' | 'default';
  width?: React.CSSProperties['width'];
  maxWidth?: React.CSSProperties['maxWidth'];
  height?: React.CSSProperties['height'];
  maxHeight?: React.CSSProperties['maxHeight'];
  color?: React.CSSProperties['color'];
  fontSize?: React.CSSProperties['fontSize'];
  fontWeight?: React.CSSProperties['fontWeight'];
  centered?: boolean;
  suffix?: React.ReactNode;
  suffixGap?: number;
  prefix?: React.ReactNode;
  prefixGap?: number;
}

export default function CustomText({
  type = 'default',
  width,
  maxWidth,
  height,
  maxHeight,
  color,
  fontSize,
  fontWeight,
  centered,
  m,
  mt,
  mb,
  ml,
  mr,
  style,
  prefix,
  prefixGap = 9,
  suffix,
  suffixGap = 9,
  children,
  ...rest
}: Props) {
  return (
    <div
      style={{
        width,
        maxWidth,
        height,
        maxHeight,
        color: color || colors.textPrimary,
        fontSize:
          fontSize || (type === 'title' ? 24 : type === 'subtitle' ? 18 : 16),
        fontWeight:
          fontWeight ||
          (type === 'title' ? 700 : type === 'subtitle' ? 600 : 400),
        textAlign: centered ? 'center' : 'left',
        margin: m,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        ...flexStyles.flexRowCenter,
        ...style,
      }}
      {...rest}
    >
      {prefix && (
        <div style={{ marginRight: prefixGap, display: 'inline-block' }}>
          {prefix}
        </div>
      )}
      {children}
      {suffix && (
        <div style={{ marginLeft: suffixGap, display: 'inline-block' }}>
          {suffix}
        </div>
      )}
    </div>
  );
}
