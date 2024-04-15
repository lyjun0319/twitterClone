import { createThemeContract, globalStyle, style } from '@vanilla-extract/css';
import { rgb } from 'polished';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: 600,
  borderColor: rgb(239, 243, 244),
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
});

export const header = style({
  display: 'flex',
  height: 53,
  alignItems: 'center',
});

export const headerTitle = style({
  marginLeft: 30,
  fontSize: 20,
  fontWeight: 'bold',
});

export const userZone = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px',
  borderBottom: `1px solid ${rgb(239, 243, 244)}`,
});

export const userImage = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: 12,
  borderRadius: '50%',
});

globalStyle(`${userImage} img`, {
  width: 134,
  borderRadius: '50%',
});

export const userName = style({
  margin: '0 12px',
  flex: 1,
});

globalStyle(`${userName} > div:first-child`, {
  fontWeight: 'bold',
  fontSize: 20,
});

globalStyle(`${userName} > div:last-child`, {
  fontSize: 15,
});

export const followButton = style({
  border: `1px solid ${rgb(207, 217, 222)}`,
  padding: ' 0 16px',
  borderRadius: 17,
  height: 34,
  backgroundColor: rgb(0, 0, 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  color: rgb(255, 255, 255),
  cursor: 'pointer',
  ':hover': {
    backgroundColor: rgb(39, 44, 48),
  },
});
