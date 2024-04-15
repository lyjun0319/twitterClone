import { globalStyle, style } from '@vanilla-extract/css';

export const homeFixed = style({
  position: 'fixed',
  zIndex: 1,
  width: 598,
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(12px)',
  borderColor: 'rgb(239, 243, 244)',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
});

export const homeText = style({
  padding: '12px 16px',
  fontSize: 20,
  lineHeight: '24px',
  fontWeight: 'bold',
});

export const homeTab = style({
  display: 'flex',
  height: 53,
});

globalStyle(`${homeTab} > div`, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  fontSize: 15,
  cursor: 'pointer',
});

export const tabIndicator = style({
  position: 'absolute',
  bottom: 0,
  borderRadius: 9999,
  width: 56,
  minWidth: 56,
  height: 4,
  backgroundColor: 'rgb(29, 155, 240)',
  alignSelf: 'center',
});
