import { globalStyle, style } from '@vanilla-extract/css';

export const companySt = style({});
export const companyListSt = style({
  display: 'flex',
});

globalStyle(`${companyListSt} li`, {
  flexGrow: 1,
  margin: '0 10px',
});
