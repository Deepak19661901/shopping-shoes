import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slice/cartSlice';

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-md'>
      <div className='w-full h-48 overflow-hidden'>
        <img
          src={item.img}
          className='object-cover object-center w-full '
          alt="shoesImg"
        />
      </div>
      <div className='details text-center mt-4'>
        <div className='text-lg font-semibold'>{item.title}</div>
        <div className='text-sm text-gray-600'>Color: {item.color}</div>
        <div className='text-sm text-gray-600'>Brand: {item.company}</div>
        <div className='text-sm text-gray-600'>Price: {item.newPrice}</div>
        <button
          className='bg-red-500 text-white py-2 px-4 mt-2 rounded-md'
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
