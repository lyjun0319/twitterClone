import { globalStyle, style } from '@vanilla-extract/css';
import { rgb, rgba } from 'polished';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: 600,
  minHeight: '100dvh',
  borderColor: rgb(239, 243, 244),
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
});
export const header = style({
  display: 'flex',
  alignItems: 'center',
  height: 53,
  padding: '0 16px',
});

globalStyle(`${header} h3`, {
  fontSize: 20,
  fontWeight: 'bold',
});

export const room = style({
  padding: 16,
  display: 'flex',
  flexDirection: 'row',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
  borderColor: rgb(239, 243, 244),
  cursor: 'pointer',
  ':hover': {
    backgroundColor: rgba(0, 0, 0, 0.03),
  },
});

export const roomUserImage = style({
  width: 40,
  height: 40,
  borderRadius: '50%',
  marginRight: 16,
});

globalStyle(`${roomUserImage} img`, {
  width: 40,
  height: 40,
  borderRadius: '50%',
  marginRight: 16,
});

export const roomChatInfo = style({
  display: 'flex',
  flexDirection: 'column',
  color: '#536471',
  fontSize: 15,
});
globalStyle(`${roomChatInfo} b`, {
  color: rgb(0, 0, 0),
});

export const roomUserInfo = style({});
export const postDate = style({});
export const roomLastChat = style({});
