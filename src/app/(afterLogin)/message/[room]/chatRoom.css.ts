import { globalStyle, style } from '@vanilla-extract/css';
import { rgb } from 'polished';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: 600,
  minHeight: '100dvh',
  padding: '0 16px',
  borderColor: rgb(239, 243, 244),
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  height: 54,
});

globalStyle(`${header} h2`, {
  marginLeft: 40,
  fontSize: 20,
});

export const userInfo = style({
  padding: '20px 16px 60px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
  borderColor: rgb(239, 243, 244),
  cursor: 'pointer',
  borderBottom: '1px solid rgb(239, 243, 244)',
  marginBottom: 20,
});

globalStyle(`${userInfo} img`, {
  width: 64,
  height: 64,
  borderRadius: '50%',
});

export const message = style({
  paddingBottom: 24,
});

export const content = style({});
export const myMessage = style({});
export const yourMessage = style({});
