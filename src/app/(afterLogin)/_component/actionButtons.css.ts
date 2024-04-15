import { globalStyle, style } from '@vanilla-extract/css';
import { rgb } from 'polished';

export const actionButtons = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  columnGap: '4px',
  marginTop: 12,
});

export const commentButton = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

globalStyle(`${commentButton}.active svg`, {
  fill: rgb(29, 155, 240),
});

globalStyle(`${commentButton} button`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  marginRight: 4,
  backgroundColor: rgb(255, 255, 255),
  border: 'none',
  outline: 'none',
  borderRadius: 19,
  cursor: 'pointer',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
});

export const repostButton = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

globalStyle(`${repostButton} button`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  marginRight: 4,
  backgroundColor: rgb(255, 255, 255),
  border: 'none',
  outline: 'none',
  borderRadius: 19,
  cursor: 'pointer',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
});

globalStyle(`${repostButton}.active svg`, {
  fill: rgb(11, 175, 123),
});

export const heartButton = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

globalStyle(`${heartButton}.active svg`, {
  fill: rgb(228, 34, 126),
});

globalStyle(`${heartButton} button`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  marginRight: 4,
  backgroundColor: rgb(255, 255, 255),
  border: 'none',
  outline: 'none',
  borderRadius: 19,
  cursor: 'pointer',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
});

export const count = style({
  color: '#000',
});
