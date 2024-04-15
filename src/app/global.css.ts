import {
  createGlobalTheme,
  createThemeContract,
  globalLayer,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';

globalLayer('reset');
globalLayer('framework');
globalLayer('app');

globalStyle('a', {
  textDecorationLine: 'unset',
  fontStyle: 'unset',
  color: 'inherit',
});

export const colorSet = createThemeContract({
  color: {
    mainColor: null,
    subColor: null,
    bdColor: null,
    textColor: null,
    bgColor: null,
    bgColorDark: null,
    bgCardDark: null,
  },
});

createGlobalTheme(':root', colorSet, {
  color: {
    mainColor: '#dc2000',
    subColor: '#ddd',
    bdColor: '#ddd',
    textColor: '#333',
    bgColor: '#fff',
    bgColorDark: '#000',
    bgCardDark: '#333',
  },
});

globalStyle('body, html', {
  margin: 0,
  padding: 0,
});

const base = style({ padding: 12 });

export const variant = styleVariants({
  primary: [base, { background: 'blue' }],
  secondary: [base, { background: 'aqua' }],
});

export const inputBase = style({
  outline: 'none',
  border: 'none',
  fontSize: 15,
  backgroundColor: 'transparent',
});
