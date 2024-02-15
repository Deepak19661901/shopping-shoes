import {createSlice} from '@reduxjs/toolkit'


const initialState={
  wishListData:[],
}


const wishListSLice = createSlice({
  name:"wishListData",
  initialState,
  reducers:{
    addToWishList:(state,action)=>{
      state.wishListData.push(action.payload);
    },
    removeFromWishList:(state,action)=>{
      state.wishListData = state.wishListData.filter((item)=>item.id!==action.payload);
    },
  }
})
export const {addToWishList,removeFromWishList} = wishListSLice.actions;
export default wishListSLice.reducer
