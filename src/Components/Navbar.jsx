import React, { useEffect, useState } from 'react';
import { FaHome, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredData } from '../slice/searchDataSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);

  const addDataToCart = useSelector((state) => state.cartData.cart);
  const totalCartItem = addDataToCart.length;

  useEffect(() => {
    const copyData = [...data];
    const filteredData = copyData.filter((item) => {
      return item.title.toLowerCase().includes(input.toLowerCase());
    });
    setSearchData(filteredData);
    dispatch(setFilteredData(searchData));
  }, [input, data ,dispatch]);

  return (
    <nav className='navbar w-full shadow-md min-h-12 flex flex-col lg:flex-row justify-between items-center sticky top-0 bg-white'>
      {/* Search Input */}
      <div className='inputField flex mt-2 lg:mt-0 lg:mx-10'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search Shoes...'
          className='w-full text-center'
        />
      </div>

      {/* Navbar Details */}
      <div className='navbarDetails flex justify-center lg:justify-end items-center space-x-3 mt-2 lg:mt-0 lg:mx-10'>
        {/* Home */}
        <div className='flex items-center space-x-1'>
          <Link to='/' className='hidden lg:block'>
            Home
          </Link>
          <Link to='/'>
            <FaHome />
          </Link>
        </div>

        {/* Cart */}
        <div className='flex items-center space-x-1 relative'>
          <Link to='/cart' className='hidden lg:block'>
            Cart
          </Link>
          <Link to='/cart' className='relative'>
            <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
              <div className='bg-orange-600 rounded-full w-4 h-4 flex items-center justify-center'>
                <span className='text-white text-sm'>{totalCartItem}</span>
              </div>
            </div>
            <FaShoppingCart />
          </Link>
        </div>

        {/* Wishlist */}
        <div className='flex items-center space-x-1'>
          <Link to='/wishlist' className='hidden lg:block'>
            Wishlist
          </Link>
          <Link to='/wishlist'>
            <FaHeart style={{color:"red"}} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
