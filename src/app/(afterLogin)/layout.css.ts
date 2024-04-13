import { style } from '@vanilla-extract/css';
import { virtualCssFileFilter } from '@vanilla-extract/integration';

export const mainContainer = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  flexGrow: 1,
});

export const headerInner = style({
  width: 275,
  height: '100dvh',
  backgroundColor: 'orange',
});

export const headerFixed = style({
  position: 'fixed',
  width: 'inherit',
  height: 'inherit',
});

export const contents = style({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  height: '100vh',
});

export const contentInr = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 990,
  height: '100%',
  backgroundColor: 'aqua',
});

export const main = style({
  width: 600,
  backgroundColor: 'aquamarine',
});
export const rightSection = style({
  width: 350,
  backgroundColor: 'blue',
});

export const logoLink = style({
  fontSize: 0,
});

export const navLink = style({
  display: 'block',
  padding: 12,
  ':hover': {
    borderRadius: 30,
    backgroundColor: '#ddd',
  },
});

export const navActive = style({
  fontWeight: 'bold',
});

export const searchBox = style({
  position: 'fixed',
});
