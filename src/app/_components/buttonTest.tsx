'use client';
import React from 'react';
import { Button } from '@/stories/Button';

interface test {
  label: string;
  primary: boolean;
}
const ButtonTest = ({ label, primary }: test) => {
  const handelClick = () => {
    console.log('aa');
  };
  return <Button label={label} primary={primary} onClick={handelClick} />;
};

export default ButtonTest;
