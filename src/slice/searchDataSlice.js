import {createSlice} from '@reduxjs/toolkit'


const searchSlice= createSlice({
  name:"KyaHaalTmhraThoKuchVHosktaHai",
  initialState:{
    filterdData:[],
  },

  reducers:{
    setFilteredData:(state,action)=>{
      // console.log("filterData",action.payload)
      state.filterdData = action.payload
    },
    handelAllProduct:(state,action)=>{
      state.filterdData = action.payload
    },
    handelNikeProduct:(state,action)=>{
      state.filterdData = action.payload
    },
    handelAdidasProduct:(state,action)=>{
      state.filterdData = action.payload
    },
    handelPumaProduct:(state,action)=>{
      state.filterdData = action.payload
    },
    handelVansProduct:(state,action)=>{
      state.filterdData = action.payload
    },
  }
})
export const {setFilteredData,handelAllProduct,handelNikeProduct,handelAdidasProduct,handelPumaProduct
,handelVansProduct
}=searchSlice.actions;
export default searchSlice.reducer