import { globalStyle, style } from '@vanilla-extract/css';
import { rgb, rgba } from 'polished';

export const search = style({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  width: 'inherit',
  height: 42,
  marginTop: 6,
  marginBottom: 12,
  borderRadius: 21,
  backgroundColor: 'rgb(239,243,244)',
  overflow: 'hidden',
});

globalStyle(`${search} svg`, {
  marginLeft: 20,
  fill: 'rgb(83, 100, 113)',
});

globalStyle(`${search} input`, {
  width: '100%',
  padding: 12,
  marginLeft: 5,
  outline: 'none',
  backgroundColor: 'inherit',
  border: 'none',
  fontSize: 15,
  boxSizing: 'border-box',
});

export const filterTitle = style({
  padding: '12px 16px',
  marginBottom: 16,
  marginTop: 12,
  color: rgba(15, 20, 25, 1.0),
  fontSize: 20,
  fontWeight: 'bold',
  background: '#ffffff',
  border: `1px solid ${rgb(239, 243, 244)}`,
  borderRadius: 16,
});

export const filterSection = style({
  padding: '0 16px 12px',
  marginBottom: 16,
  borderRadius: 16,
  border: `1px solid ${rgb(239, 243, 244)}`,
});

globalStyle(`${filterSection} label`, {
  display: 'flex',
  alignItems: 'center',
  height: 36,
  fontSize: 15,
  fontWeight: 'bold',
});

export const radio = style({
  display: 'flex',
});

globalStyle(`${radio} > div`, {
  flex: 1,
});
