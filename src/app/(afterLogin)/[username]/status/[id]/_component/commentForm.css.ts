import { globalStyle, style } from '@vanilla-extract/css';
import { rgb, rgba } from 'polished';

export const postUserSection = style({
  width: 40,
  marginRight: 12,
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

export const postForm = style({
  display: 'flex',
  padding: '16px 16px 8px',
  borderColor: rgb(239, 243, 244),
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
});
globalStyle(`${postForm} textarea`, {
  width: '100%',
  border: 'none',
  padding: '12px 0',
  fontSize: 20,
  lineHeight: 24,
  outline: 'none',
});

export const postInputSection = style({
  flex: 1,
});

export const postButtonSection = style({
  width: '100%',
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
  width: 34,
  height: 34,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 17,
  transitionDuration: '0.2s',
  transitionProperty: 'background-color',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: rgba(29, 155, 240, 0.01),
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
  border: 'none',
  color: rgb(255, 255, 255),
  fontWeight: '700',
  fontSize: 15,
  borderRadius: 18,
  backgroundColor: rgb(29, 155, 240),
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      opacity: 0.5,
    },
    '&:hover': {
      backgroundColor: rgb(26, 140, 216),
    },
  },
});
