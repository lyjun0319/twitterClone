import { recipe } from '@vanilla-extract/recipes';
import { globalStyle } from '@vanilla-extract/css';
export const avatarSt = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  variants: {
    size: {
      small: {
        width: 40,
        height: 40,
      },
      mid: {
        width: 50,
        height: 50,
      },
      large: {
        width: 60,
        height: 60,
      },
    },
    notImg: {
      img: {},
      notImg: {
        fontSize: 14,
        backgroundColor: '#000',
        '@media': {
          '(prefers-color-scheme : dark)': {
            backgroundColor: '#666',
            color: '#fff',
          },
        },
      },
    },
  },
});

globalStyle('a', {
  textDecorationLine: 'unset',
});
