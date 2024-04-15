import { globalStyle, style } from '@vanilla-extract/css';

export const trendBg = style({
  marginTop: 12,
  backgroundColor: 'rgb(247, 249, 249)',
  borderRadius: 16,
});

export const trend = style({
  fontSize: 20,
  fontWeight: 'bold',
  padding: '12px 0',
});

globalStyle(`${trend} h3`, {
  padding: '0 16px',
  marginBottom: 12,
});

export const container = style({
  display: 'block',
  padding: '12px 16px',
  height: 82,
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
});

export const title = style({
  marginTop: 2,
  marginBottom: 4,
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: '20px',
});

export const count = style({
  color: 'rgb(83, 100, 113)',
  fontSize: 13,
  lineHeight: '16px',
  fontWeight: 'lighter',
});
