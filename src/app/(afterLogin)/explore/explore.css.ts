import { globalStyle, style } from '@vanilla-extract/css';
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

export const formZone = style({
  width: 566,
  paddingLeft: 16,
  marginBottom: 60,
});

export const trendBg = style({
  marginTop: 60,
  backgroundColor: rgb(247, 249, 249),
});

export const trend = style({
  marginBottom: 12,
  fontSize: 20,
  fontWeight: 'bold',
  borderTop: `1px solid ${rgb(239, 243, 244)}`,
});

globalStyle(`${trend} h3`, {
  padding: '12px 16px',
});
