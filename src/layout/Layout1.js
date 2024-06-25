import React, { useState } from 'react';
import Header from '../Component/Header';
import Footter from '../Component/Footter';
import { useCart } from '../Context/CartProvider';

import { formatCurrency } from '../until/index';
import axios from 'axios';
const Layout1 = ({ children }) => {
    const { cart } = useCart(); // Ensure to get the cart from the context
    

  return (
    <div style={{ backgroundColor: "#fdc323" }} className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
      <Header cart={cart} formatCurrency={formatCurrency}  />
      {children}
      <Footter />
    </div>
  );
}


export default Layout1;