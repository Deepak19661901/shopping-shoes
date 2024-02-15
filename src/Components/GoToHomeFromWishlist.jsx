import React from 'react'
import {NavLink} from 'react-router-dom'
const GoToHomeFromWishlist = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
    <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
        
          <h2 className="text-2xl font-semibold mb-4">Your WishList is empty</h2>
          <p className="text-gray-600 mb-4">Looks like you haven't added anything to your Wishlist yet.</p>
          <NavLink className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          NavLink to="/"
          >
            ADD TO WISHLIST
          </NavLink>
        </div>
</div>
</div>
  )
}

export default GoToHomeFromWishlist
