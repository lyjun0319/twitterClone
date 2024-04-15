import { style } from '@vanilla-extract/css';
import { rgb } from 'polished';

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
export const header = style({
  display: 'flex',
  height: 53,
  alignItems: 'center',
});
export const headerTitle = style({
  fontSize: 20,
  fontWeight: '700',
  marginLeft: 30,
});
