import {createSlice} from '@reduxjs/toolkit'
import data from '../db/shoes'



const initialState = {
  value:data,
}

const dataSlice = createSlice({
  name:"data",
  initialState,
  reducers:{
    shoesArray:(state)=>{
      // console.log("dataSLice",state.value)
      return state.value;
    }
  }
})
export const {shoesArray} = dataSlice.actions;
export default dataSlice.reducer