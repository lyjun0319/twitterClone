import { globalStyle, style } from '@vanilla-extract/css';

export const navPill = style({
  display: 'inline-flex',
  height: 50,
  padding: 12,
  alignItems: 'center',
  ':hover': {
    backgroundColor: 'rgba(15, 20, 25, 0.1)',
    borderRadius: 29,
  },
});

globalStyle(`${navPill} > div`, {
  marginRight: 16,
  marginLeft: 20,
  fontSize: 20,
});
