import {
  createGlobalTheme,
  createThemeContract,
  globalLayer,
  globalStyle,
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
  // '@media': {
  //   '(prefers-color-scheme : dark)': {
  //     color: colorSet.color.bgColor,
  //     backgroundColor: colorSet.color.bgColorDark,
  //   },
  //   '(prefers-color-scheme: light)': {
  //     color: colorSet.color.bgColor,
  //     backgroundColor: colorSet.color.bgColor,
  //   },
  // },
});
