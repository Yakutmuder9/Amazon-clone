import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
    isLoading: false,
    isSuccess: false,
    user: [],
    isError: false,
};

export const featchRegister = createAsyncThunk(
    'auth/featchRegister', async () =>{
      let response = await axios.post('/register')
      return response.json()
    }
)
export const featchLogin = createAsyncThunk(
    'auth/featchLogin', async () =>{
      let response = await axios.post('/login')
      return response.json()
    }
)

export const featchChangePassowrd = createAsyncThunk(
    'auth/featchChangePassowrd', async () =>{
      let response = await axios.post('/changepassowrd')
      return response.json()
    }
)

export const featchLogout = createAsyncThunk(
    'auth/featchLogout', async () =>{
      let response = await axios.post('/logout')
      return response.json()
    }
)
export const featchDeletAccount = createAsyncThunk(
    'auth/featchDeletAccount', async () =>{
      let response = await axios.post('/deletaccount')
      return response.json()
    }
)


const authSlice = createSlice({
    name : "auth",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
          .addCase(featchRegister.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.posts.push(action.payload);
            toast.success("Post added successfully");
          })
          .addCase(featchRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })


          .addCase(featchLogin.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.posts.push(action.payload);
            toast.success("Post added successfully");
          })
          .addCase(featchLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })

         
          
          .addCase(featchLogout.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchLogout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.posts = action.payload;
          })
          .addCase(featchLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })


          .addCase(featchChangePassowrd.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchChangePassowrd.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.post = action.payload;
            toast.success("Post updated successfully");
          })
          .addCase(featchChangePassowrd.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })

          .addCase(featchDeletAccount.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(featchDeletAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Post deleted successfully");
          })
          .addCase(featchDeletAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
      }
})

export const authReducer = authSlice.reducer;