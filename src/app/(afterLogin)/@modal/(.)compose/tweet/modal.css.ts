import { globalStyle, style } from '@vanilla-extract/css';
import { rgb, rgba } from 'polished';

export const modalBackground = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: rgba(0, 0, 0, 0.4),
});

export const modal = style({
  position: 'relative',
  top: '5%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80vw',
  minWidth: 600,
  maxHeight: 400,
  borderRadius: 16,
  backgroundColor: rgb(255, 255, 255),
});

export const closeButton = style({
  position: 'relative',
  top: 8,
  left: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  borderRadius: 17,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: rgba(15, 20, 25, 0.1),
  },
});

export const modalForm = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const modalBody = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  padding: '0 16px',
  marginTop: 54,
});
export const postUserSection = style({
  marginRight: 12,
  width: 40,
});
export const postUserImage = style({
  width: 40,
  height: 40,
  borderRadius: 20,
});
globalStyle(`${postUserImage} img`, {
  width: 40,
  height: 40,
  borderRadius: 20,
});
export const inputDiv = style({
  flex: 1,
});
export const input = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: 20,
  selectors: {
    '&: placeholder': {
      fontFamily: 'Malgun Gothic, sans-serif',
    },
  },
});
export const modalFooter = style({
  padding: '0 16px',
});
export const modalDivider = style({
  width: '100%',
  borderBottom: `1px solid ${rgb(239, 243, 244)}`,
});

export const footerButtons = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
export const footerButtonLeft = style({
  flex: 1,
});
export const uploadButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 17,
  backgroundColor: rgba(29, 155, 240, 0.01),
  transitionDuration: ' 0.2s',
  transitionProperty: 'background-color',
  ':hover': {
    backgroundColor: rgba(29, 155, 240, 0.1),
  },
});

globalStyle(`${uploadButton} svg`, {
  fill: rgb(29, 155, 240),
});

export const actionButton = style({
  width: 94,
  height: 36,
  margin: '8px 0',
  color: rgb(255, 255, 255),
  fontSize: 17,
  backgroundColor: rgb(29, 155, 240),
  border: 'none',
  borderRadius: 18,
  selectors: {
    '&:disabled': {
      opacity: 0.5,
    },
  },
});
