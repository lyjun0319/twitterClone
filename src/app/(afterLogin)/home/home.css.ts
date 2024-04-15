import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: 600,
  borderColor: 'rgb(239, 243, 244)',
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  '@media': {
    'screen and (min-width: 687px)': {
      width: 600,
    },
    '(prefers-color-scheme: dark)': {},
  },
});
