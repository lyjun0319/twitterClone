import { globalStyle, style } from '@vanilla-extract/css';

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
  marginTop: 101,
  padding: '16px 16px 8px',
  borderColor: 'rgb(239,243,244)',
});

export const postInputSection = style({
  flex: 1,
});

export const postButtonSection = style({
  width: '100%',
});

globalStyle(`${postForm} textarea`, {
  width: '100%',
  border: 'none',
  padding: '12px 0',
  fontSize: 20,
  lineHeight: '24px',
  outline: 'none',
  resize: 'none',
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
  transitionDuration: '0.2s',
  transitionProperty: 'background-color',
  backgroundColor: 'rgb(29, 155, 240, 0.01)',
  ':hover': {
    backgroundColor: 'rgb(29, 155, 240, 0.1)',
  },
});

globalStyle(`${uploadButton} svg`, {
  fill: 'rgb(29, 155, 240)',
});

export const actionButton = style({
  width: 94,
  height: 36,
  border: 'none',
  color: ' rgb(255, 255, 255)',
  fontWeight: 700,
  fontSize: 15,
  borderRadius: 18,
  backgroundColor: 'rgb(29, 155, 240)',
  ':disabled': {
    opacity: 0.5,
  },
  ':hover': {
    backgroundColor: 'rgb(26, 140, 216)',
  },
});
