import React from 'react';
import { cardSt } from '@/app/_components/sessionCard.css';
const SessionCard = ({ children }: { children: React.ReactNode }) => {
  return <div className={cardSt}>{children}</div>;
};

export default SessionCard;
