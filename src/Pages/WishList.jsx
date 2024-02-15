import React from 'react'
import { useSelector } from 'react-redux'
import WishListCard from '../Components/WishListCard'
import GoToHomeFromWishlist from '../Components/GoToHomeFromWishlist'

const Cart = () => {
  const wishListData = useSelector((state)=>state.wishListData.wishListData);
  // console.log(wishListData)
  
  return (
<div className='w-full flex flex-wrap px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-5 justify-center'>
      {
       wishListData.length===0?(<GoToHomeFromWishlist/>):
        wishListData.map((item, index) => {
          return (
            <WishListCard item={item} key={index}  />
          )
        })
      }
    </div>
  )
}

export default Cart