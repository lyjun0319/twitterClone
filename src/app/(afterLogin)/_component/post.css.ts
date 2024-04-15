import { globalStyle, style } from '@vanilla-extract/css';
import { rgb } from 'polished';

export const post = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 16px',
  borderColor: 'rgb(239, 243, 244)',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  transitionProperty: ' background-color, box-shadow',
  transitionDuration: '0.2s',
  cursor: ' pointer',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
});

export const postWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const postReposted = style({
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(83, 100, 113)',
  marginLeft: 24,
  fontSize: 13,
  lineHeight: '20px',
});

globalStyle(`${postReposted} svg`, {
  fill: 'rgb(83, 100, 113)',
});

export const postUserSection = style({
  width: 40,
  marginRight: 12,
});

export const postUserImage = style({
  position: 'relative',
  display: ' inline-block',
  width: 40,
  height: 40,
  borderRadius: 20,
});

globalStyle(`${postUserImage} img`, {
  width: 40,
  height: 40,
  borderRadius: 20,
});

export const postUserId = style({});

export const postShade = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'inline-block',
  width: 40,
  height: 40,
  borderRadius: 20,
  ':hover': {
    backgroundColor: 'rgba(26, 26, 26, 0.15)',
  },
});

export const postUserName = style({
  fontWeight: 'bold',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const postUserNick = style({
  color: rgb(83, 100, 113),
});

export const postDate = style({
  color: rgb(83, 100, 113),
  ':hover': {
    textDecorationLine: 'underline',
  },
});

export const postBody = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const postMeta = style({
  display: 'flex',
  flexDirection: 'row',
});

export const postImageSection = style({});

globalStyle(`${postImageSection} img`, {
  width: '100%',
  marginTop: 12,
  borderRadius: 16,
});

export const actionButtons = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  columnGap: 4,
  marginTop: 12,
});

globalStyle(`${actionButtons} svg`, {
  fill: rgb(83, 100, 113),
});
