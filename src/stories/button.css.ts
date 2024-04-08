import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

const btnDefault = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 25,
  paddingRight: 25,
  color: '#fff',
  backgroundColor: '#888',
});

const mode = {
  primary: '#dc2000',
  secondary: 'aqua',
};

export const btnMode = styleVariants(mode, (modeColor) => [
  btnDefault,
  {
    backgroundColor: modeColor,
  },
]);

globalStyle('button', {
  border: 0,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'transparent',
});
