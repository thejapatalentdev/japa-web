import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
