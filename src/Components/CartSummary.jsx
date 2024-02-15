import React from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../slice/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartSummary = () => {
  let totalAmount = 0;
  const deliveryCharge = 49;
  const cartData = useSelector((state) => state.cartData.cart);
  const totalItem = cartData.length;
  const dispatch = useDispatch();
  
  cartData.forEach((item) => {
    totalAmount = totalAmount + Number(item.newPrice);
  });

  const handleOrder = () => {
    toast.success("Your Order has been Placed");
    dispatch(clearCart());
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6 lg:fixed">
      <h2 className="text-xl font-semibold mb-4">Bag Summary</h2>
      <div className="flex justify-between mb-4">
        <p>Total Items:</p>
        <p>{totalItem}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Total Amount:</p>
        <p>RS {totalAmount.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Delivery Charge:</p>
        <p>RS {deliveryCharge.toFixed(2)}</p>
      </div>
      <button className="py-2 px-4 rounded-sm w-full bg-orange-400 hover:bg-orange-500 text-white"
        onClick={handleOrder}>
        Place Order
      </button>
      <ToastContainer />
    </div>
  );
};

export default CartSummary;
