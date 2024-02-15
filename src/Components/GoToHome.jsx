import React from 'react';
import { NavLink } from 'react-router-dom';

const GoToHome = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet.</p>
        <NavLink className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          to="/"
        >
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};

export default GoToHome;
