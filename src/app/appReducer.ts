import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from '../common/api/api';
import { ItemInCartType } from "../common/types/commonTypes";
import { getFromLocalStorage } from '../common/utils/utils';
import { setCartItems } from '../features/cart/cartReducer';

const slice = createSlice({
   name: 'app',
   initialState: {
      isInitialized: false,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(initializeApp.fulfilled, (state) => { state.isInitialized = true })
         .addCase(initializeApp.rejected, (state) => { state.isInitialized = true })
   }
})
export const initializeApp = createAsyncThunk(
   'app/initialized',
   async (_, { rejectWithValue, dispatch }) => {
      const data = getFromLocalStorage<{ items: ItemInCartType[] }>('cart')
      if (data) {
         dispatch(setCartItems(data.items))
      }
      try {
         await api.auth()
         return
      } catch {
         return rejectWithValue('error')
      }
   }
)
export const appReducer = slice.reducer 