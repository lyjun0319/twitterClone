import { globalStyle, style } from '@vanilla-extract/css';

export const modalBackground = style({
  width: '100vw',
  height: '100%',
  display: ' flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const modal = style({
  backgroundColor: '#fff',
  position: 'relative',
  top: '5%',
  maxWidth: '80vw',
  minWidth: 600,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  height: 650,
});

globalStyle(`${modal} form`, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const modalHeader = style({
  padding: '36px 80px 20px',
  fontSize: 31,
  fontWeight: 'bold',
});

export const inputDiv = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const inputLabel = style({
  width: '100%',
  border: 'none',
  fontSize: 17,
  marginTop: 3,
  padding: '12px 8px 8px',
  outline: 'none',
});

export const modalBody = style({
  flex: 1,
  padding: '0 80px',
});

export const input = style({
  width: '100%',
  border: '1px solid #ddd',
  fontSize: 17,
  marginTop: 16,
  padding: '12px 8px 8px',
  outline: 'none',
});

export const modalFooter = style({
  padding: '24px 80px',
});

export const actionButton = style({
  width: '100%',
  height: 50,
  borderRadius: 25,
  backgroundColor: 'rgb(15, 20, 25)',
  color: 'white',
  fontSize: 17,
  ':disabled': {
    opacity: 0.5,
  },
});

export const error = style({
  fontWeight: 'bold',
  color: 'red',
});
