import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../Components/CartCard';
import GoToHome from '../Components/GoToHome';
import CartSummary from '../Components/CartSummary';

const Cart = () => {
  const addDataToCart = useSelector((state) => state.cartData.cart);

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 pt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Cart Items */}
        <div className='col-span-1 md:col-span-2 lg:col-span-3'>
          <div className='grid grid-cols-1 gap-4'>
            {addDataToCart.length === 0 ? <GoToHome /> :
              addDataToCart.map((item, index) => (
                <CartCard item={item} key={index} />
              ))
            }
          </div>
        </div>
        {/* Cart Summary */}
        <div className='col-span-1 md:col-span-1 lg:col-span-1'>
          <div className='sticky top-0'>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
