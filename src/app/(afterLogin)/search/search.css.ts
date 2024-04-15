import { globalStyle, style } from '@vanilla-extract/css';
import { rgb, rgba } from 'polished';

export const main = style({
  width: 600,
  borderColor: rgb(239, 243, 244),
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

export const searchTop = style({
  backgroundColor: rgba(255, 255, 255, 0.85),
  backdropFilter: 'blur(12px)',
  borderColor: rgb(239, 243, 244),
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  width: 600,
  position: 'fixed',
});
export const searchZone = style({
  display: 'flex',
  alignItems: 'center',
});
export const buttonZone = style({
  width: 56,
});
export const formZone = style({
  flex: 1,
  width: 526,
  height: 53,
});
export const homeFixed = style({
  position: 'fixed',
  zIndex: 1,
  width: 598,
  backgroundColor: rgba(255, 255, 255, 0.85),
  backdropFilter: 'blur(12px)',
  borderColor: rgb(239, 243, 244),
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
});
export const homeTab = style({
  display: 'flex',
  height: 53,
});
globalStyle(`${homeTab} > div`, {
  cursor: 'pointer',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  position: 'relative',
});

export const tabIndicator = style({
  height: 4,
  alignSelf: 'center',
  backgroundColor: rgb(29, 155, 240),
  minWidth: 56,
  width: 56,
  position: 'absolute',
  bottom: 0,
  borderRadius: 9999,
});
export const list = style({
  marginTop: 110,
});
