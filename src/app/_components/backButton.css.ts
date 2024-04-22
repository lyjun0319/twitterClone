import { style } from '@vanilla-extract/css';

export const closeButton = style({
  width: 34,
  height: 34,
  borderRadius: 17,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  position: 'absolute',
  left: 16,
  top: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':hover': {
    backgroundColor: 'rgba(15,20,25, 0.1)',
  },
});
