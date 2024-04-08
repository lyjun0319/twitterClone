import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const btnStyle = recipe({
  base: {
    borderRadius: 7,
  },
  variants: {
    mode: {
      primary: { background: '#dc2000', color: '#fff' },
      secondary: { background: 'blueviolet' },
      warning: { background: 'slateblue' },
    },
    size: {
      small: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      medium: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
      },
      large: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 35,
        paddingRight: 35,
      },
    },
  },
  defaultVariants: {
    mode: 'primary',
    size: 'medium',
  },
});

globalStyle('button', {
  border: 0,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'transparent',
});
