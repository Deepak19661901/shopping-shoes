import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { addToWishList } from '../slice/wishListSlice';

const ShoesCard = ({ item }) => {
  const cartData = useSelector((state) => state.cartData.cart);
  const wishListData = useSelector((state) => state.wishListData.wishListData);
  const dispatch = useDispatch();

  const isItemCart = () => cartData.find((cartItem) => cartItem.id === item.id);
  const isWishListItem = () => wishListData.find((wishItem) => wishItem.id === item.id);

  return (
    <div className='shoesCard max-w-72 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 md:m-2 m-2 flex flex-col justify-between items-center shadow-md rounded-lg overflow-hidden card bg-gray-100 space-x-1'>
    <div className='w-full flex justify-end'>
        <FaHeart
          className='text-2xl cursor-pointer'
          style={{ color: isWishListItem() ? 'red' : 'black' }}
          onClick={() => dispatch(addToWishList(item))}
        />
      </div>
      <div className='w-full overflow-hidden'>
        <img src={item.img} className='object-cover object-center w-full h-full' alt='shoesImg' />
      </div>
      
      <div className='details flex flex-col space-y-1 text-center w-full'>
        <div className='text-lg font-semibold'>{item.title}</div>
        <div className='text-sm'>{item.color}</div>
        <div className='text-sm'>{item.company}</div>
        <div className='text-sm'>{item.newPrice}</div>
        <div className='text-sm'>{item.category}</div>
        <div className='flex w-full justify-evenly'>
          <button
            className='bg-red-400 w-full p-2 rounded-md'
            onClick={() => dispatch(addToCart(item))}
          >
            {isItemCart() ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
