import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {removeFromCart} from '../slice/cartSlice'
import {removeFromWishList} from '../slice/wishListSlice'

const ShoesCard = ({ item }) => {

  // const addDataToCart = useSelector((state)=>state.cartData.cart)
  // console.log(addDataToCart,"addTocart")

  const dispatch = useDispatch();
 

  return (
    <div className='shoesCard max-w-72 hover:transform sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 md:m-2 m-2 flex flex-col justify-between items-center shadow-md rounded-lg overflow-hidden card bg-gray-100 hover:bg-gray-200 space-x-1 '>
      <div className='w-full overflow-hidden '>
        <img
          src={item.img}
          className='object-cover object-center w-full h-full  '
          alt="shoesImg"
        />
      </div>
      <div className='details flex flex-col space-y-1 text-center'>
        <div className='text-lg font-semibold'>{item.title}</div>
        <div className=' flex w-96 justify-evenly'>
        <button className=' bg-red-700 w-full p-2  rounded-md text-white'
        onClick={()=>dispatch(removeFromWishList(item.id))}
        >Remove From WishList <span className='text-2xl font-bold text-white'>X</span> </button>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
