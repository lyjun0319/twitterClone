import { globalStyle, style } from '@vanilla-extract/css';
import { colorSet } from '@/app/global.css';

export const cardSt = style({
  border: '1px solid transparent',
  padding: 30,
  backgroundColor: '#fff',
  borderRadius: 6,
  '@media': {
    '(prefers-color-scheme : dark)': {
      backgroundColor: colorSet.color.bgCardDark,
    },
    '(prefers-color-scheme: light)': {
      backgroundColor: colorSet.color.bgColor,
    },
  },
});

globalStyle('li,ul,ol', {
  listStyle: 'none',
});
