export const colors = {
  primary: '#0445b1',
  primaryLight: '#0c57a6',
  textPrimary: '#131d2d',
  gray: '#eef2f8',
  gray2: '#f4f7fb',
  gray3: '#e5e9ee',
  gray4: '#c3c9d2',
  gray5: '#9fa7b3',
  gray6: '#565b65',
  sliderColor: '#7384a0',
  inputColor: '#f7f9fb',
  red: '#d62020',
  blue: '#1c5bd5',
  black: '#000',
  white: '#fff',
  info: '#0445b1',
  warning: '#997f21',
  success: '#21994a',
  danger: '#992121',
};

export const shadows = {
  card: '0px 10px 20px 0px rgba(0, 0, 0, 0.06)',
};

export const flexStyles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flexRowCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexRowSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  flexRowSpaceEvenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  flexColumnSpaceBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexColumnSpaceAround: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  flexColumnSpaceEvenly: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  flexRowCenterSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnCenterSpaceBetween: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnCenterSpaceAround: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexColumnCenterSpaceEvenly: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenterSpaceAround: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowCenterSpaceEvenly: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenterWrap: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flexColumnCenterWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flexRowCenterSpaceBetweenWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexColumnCenterSpaceBetweenWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexColumnCenterSpaceAroundWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export type MarginTypes = {
  m?: React.CSSProperties['margin'];
  mt?: React.CSSProperties['marginTop'];
  mb?: React.CSSProperties['marginBottom'];
  ml?: React.CSSProperties['marginLeft'];
  mr?: React.CSSProperties['marginRight'];
};
