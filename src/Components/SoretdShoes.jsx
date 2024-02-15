import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {handelAllProduct,handelNikeProduct,handelAdidasProduct,handelPumaProduct
  ,handelVansProduct} from '../slice/searchDataSlice'

const SortedShoes = () => {
const data = useSelector((state)=>state.data.value);

// console.log(data,"data")

const nikeitem  = data.filter((item)=>item.company.toLowerCase()==="nike");
// console.log(nikeitem)
const adidas = data.filter((item)=>item.company.toLowerCase()==="adidas");
// console.log(adidas)

const puma = data.filter((item)=>item.company.toLowerCase()==="puma");
// console.log(puma)

const vans = data.filter((item)=>item.company.toLowerCase()==="vans")
// console.log(vans)

  const dispatch = useDispatch()
  return (
    <div className="flex flex-wrap justify-center shadow-md fixed bg-white w-full border-t border-gray-400 ">
      <div className="m-2">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline text-xs md:py-2 md:px-4 md:text-base"
      onClick={()=>dispatch(handelAllProduct(data))}
        >
          All Products
        </button>
      </div>
      <div className="m-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline text-xs md:py-2 md:px-4 md:text-base"
        onClick={()=>dispatch(handelNikeProduct(nikeitem))}
        >
          Nike
        </button>
      </div>
      <div className="m-2">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline text-xs md:py-2 md:px-4 md:text-base"
        onClick={()=>dispatch(handelAdidasProduct(adidas))}
        >
          Adidas
        </button>
      </div>
      <div className="m-2">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline text-xs md:py-2 md:px-4 md:text-base"
        onClick={()=>dispatch(handelPumaProduct(puma))}
        >
          Puma
        </button>
      </div>
      <div className="m-2">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline text-xs md:py-2 md:px-4 md:text-base"
        onClick={()=>dispatch(handelVansProduct(vans))}
        >
          Vans
        </button>
      </div>
    </div>
   
  );
};

export default SortedShoes;
