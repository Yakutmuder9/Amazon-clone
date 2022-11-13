import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
import axios from 'axios'

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
  };

export const featchProducts = createAsyncThunk(
    'products/featchProducts', async () =>{
      let response = await axios.get('api/products')
      return response.json()
    }
)

const productsSlice = createSlice({
    name : "products",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
          .addCase(featchProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.posts = action.payload;
          })
          .addCase(featchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
      }
})

export const productsReduce = productsSlice.reducer;