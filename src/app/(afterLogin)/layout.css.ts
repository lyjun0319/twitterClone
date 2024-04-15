import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { inputBase } from '@/app/global.css';
import { glob } from 'glob';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
});

export const leftSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  flexGrow: 1,
});

export const leftSection = style({
  width: 275,
  height: '100dvh',
});

export const leftSectionFixed = style({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
  height: '100dvh',
});

globalStyle(`${leftSectionFixed} nav`, {
  flex: 1,
});

globalStyle(`${leftSectionFixed} nav li`, {
  listStyleType: 'none',
});

export const logo = style({
  display: 'inline-block',
  height: 56,
  marginTop: 2,
});

export const logoPill = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  borderRadius: '50%',
  ':hover': {
    backgroundColor: 'rgba(15,20,25, 0.1)',
  },
});

export const postButton = style({
  margin: '16px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 52,
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
  backgroundColor: 'rgb(29, 155, 240)',
  width: 234,
  border: 'none',
  color: 'rgb(255, 255, 255)',
  fontWeight: 700,
  fontSize: 17,
  borderRadius: 26,
  ':hover': {
    backgroundColor: 'rgb(26, 140, 216)',
  },
});

export const rightSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100dvh',
});

export const rightSectionInner = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 990,
  height: '100%',
});

export const main = style({
  width: 600,
  height: '200dvh',
});

export const rightSection = style({
  width: 350,
  height: '100%',
});

export const followRecommend = style({
  padding: '12px 16px',
  margin: '12px 0',
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: ' rgb(247, 249, 249)',
  borderRadius: 16,
});
globalStyle(`${followRecommend} h3`, {
  paddingBottom: 12,
});
