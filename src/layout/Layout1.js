import React, { useState } from 'react';
import Header from '../Component/Header';
import Footter from '../Component/Footter';



const Layout1 = ({ children }) => {
    
  return (
    <div style={{ backgroundColor: "#fdc323" }} className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
      <Header  />
      {children}
      <Footter />
    </div>
  );
}

export default Layout1;