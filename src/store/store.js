import {configureStore} from '@reduxjs/toolkit'
import dataSliceReducer from '../slice/dataSlice';
import searchDataReducers from '../slice/searchDataSlice'
import cartSliceReducer from '../slice/cartSlice'
import wishListSliceReducer from '../slice/wishListSlice';



const store = configureStore({
  reducer:{
    data:dataSliceReducer,
    searchData:searchDataReducers,
    cartData:cartSliceReducer,
    wishListData:wishListSliceReducer,
  }
})
export default store;