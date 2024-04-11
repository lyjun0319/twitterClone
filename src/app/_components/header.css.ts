import { style, createThemeContract, globalStyle } from '@vanilla-extract/css';
import { colorSet } from '@/app/global.css';

export const headerSt = style({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 25px',
  borderBottom: `1px solid ${colorSet.color.bdColor}`,
});

export const logo = style({
  flexGrow: 1,
});

export const nav = style({
  display: 'flex',
  justifyContent: 'flex-end',
  flexGrow: 1,
});
export const navLink = style({
  display: 'block',
  padding: 10,
  paddingLeft: 15,
  paddingRight: 15,
});

export const globelBox = style({
  flexGrow: 0,
});
