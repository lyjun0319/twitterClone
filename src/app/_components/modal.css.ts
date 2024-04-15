import { style } from '@vanilla-extract/css';
import { colorSet } from '@/app/global.css';

export const modalWrap = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
});

export const modal = style({
  position: 'relative',
  top: '5%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '600px',
  maxWidth: '80vw',
  height: 550,
  borderRadius: 16,
  backgroundColor: colorSet.color.bgColor,
});

export const modalHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '36px 80px 20px',
  fontSize: 31,
  fontWeight: 'bold',
});
