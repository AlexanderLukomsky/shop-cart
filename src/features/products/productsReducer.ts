import { api } from './../../common/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductType, StatusType } from '../../common/types/commonTypes';

const slice = createSlice({
   name: 'products',
   initialState: {
      items: [] as ProductType[],
      status: 'idle' as StatusType
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
         })
   }
})
export const fetchProducts = createAsyncThunk<ProductType[], undefined, { rejectValue: string }>(
   'products/getProducts',
   async (_, { rejectWithValue }) => {
      try {
         const res = await api.getProduct('imitation')
         return res
      } catch {
         return rejectWithValue('error')
      }
   }
)
export const productsReducer = slice.reducer



