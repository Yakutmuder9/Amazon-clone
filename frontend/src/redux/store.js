import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../redux/features/auth/authSlice'
import { productsReduce } from '../redux/features/product/productsSlice'
import { cartReducer } from '../redux/features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productsReduce,
        cart: cartReducer
    }
})