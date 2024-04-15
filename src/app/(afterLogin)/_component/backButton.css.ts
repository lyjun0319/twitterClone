import { style } from '@vanilla-extract/css';
import { rgba } from 'polished';

export const backButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  backgroundColor: ' #fff',
  border: 'none',
  borderRadius: 17,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: rgba(15, 20, 25, 0.1),
  },
});
