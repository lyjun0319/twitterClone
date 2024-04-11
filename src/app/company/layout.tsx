import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      company layout
      {children}
    </div>
  );
};

export default Layout;
