import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100dvw',
  height: '100dvh',
});

export const left = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const right = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const textH1 = style({
  fontWeight: 'bold',
  fontSize: 64,
  marginBottom: '48px 0',
});

export const textH2 = style({
  fontWeight: 'bold',
  fontSize: 31,
  marginBottom: 32,
});

export const textH3 = style({
  fontWeight: 'bold',
  fontSize: 17,
  marginBottom: 20,
  marginTop: 40,
});

export const signUp = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: '0 16px',
  fontSize: 15,
  backgroundColor: 'rgb(29, 155, 240)',
  color: '#fff',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'rgba(29,155,240,0.8)',
  },
});

export const login = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  height: 40,
  padding: '0 16px',
  borderRadius: 20,
  fontSize: 15,
  color: 'rgb(29, 155, 240)',
  border: '1px solid rgb(207,217,222)',
});
