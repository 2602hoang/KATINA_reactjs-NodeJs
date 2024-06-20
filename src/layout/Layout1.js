import React from 'react';
import Header from '../Component/Header';
import Footter from '../Component/Footter';
import { useCart } from '../Context/CartProvider';

import { formatCurrency } from '../until/index';
const Layout1 = ({ children }) => {
    const { cart } = useCart();
  return (
    <div style={{ backgroundColor: "#fdc323" }} className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
      <Header cart={cart} formatCurrency={formatCurrency}  />
      {children}
      <Footter />
    </div>
  );
}

export default Layout1;