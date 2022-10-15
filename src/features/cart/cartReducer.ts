import { StatusType } from './../../common/types/commonTypes';
import { AppRootStateType } from './../../store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemInCartType, ProductType } from '../../common/types/commonTypes';
import { api, ClientInfoType } from '../../common/api/api';
const slice = createSlice({
   name: 'cart',
   initialState: {
      items: [] as ItemInCartType[],
      totalCost: 0,
      status: 'idle' as StatusType
   },
   reducers: {
      setCartItems: (state, action: PayloadAction<ItemInCartType[]>) => {
         state.items = action.payload
      },
      addItemCart: (state, action: PayloadAction<ProductType>) => {
         const itemInCart = state.items.find(item => item.id === action.payload.id)
         if (itemInCart) {
            itemInCart.quantity++
         } else {
            state.items.push({ ...action.payload, quantity: 1 })
         }
      },
      incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
         const item = state.items.find(item => item.id === action.payload.id)
         if (item) {
            item.quantity++
         }
      },
      decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
         const item = state.items.find(item => item.id === action.payload.id)
         if (item) {
            item.quantity--
         }
      },
      removeItem: (state, action: PayloadAction<{ id: string }>) => {
         const items = state.items.filter(item => item.id !== action.payload.id)
         state.items = items
      },
      setCartTotalCost: state => {
         let sum = 0
         state.items.forEach(elem => {
            sum += elem.price * elem.quantity
         });
         state.totalCost = sum
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(sentOrder.pending, state => { state.status = 'pending' })
         .addCase(sentOrder.fulfilled, state => {
            state.status = 'succeeded'
            state.items = []
            state.totalCost = 0
         })
         .addCase(sentOrder.rejected, state => { state.status = 'failed' })
   }
})
export const sentOrder = createAsyncThunk<string, ClientInfoType, { rejectValue: string }>(
   'cart/setOrder',
   async (clientInfo, { getState, rejectWithValue }) => {
      const order = (getState() as AppRootStateType).cart
      const data = { clientInfo, order }
      try {
         const res = api.sentOrder(data)
         return res
      } catch {
         return rejectWithValue('error')
      }
   }
)
export const cartReducer = slice.reducer
export const { addItemCart, incrementQuantity, decrementQuantity, removeItem, setCartItems, setCartTotalCost } = slice.actions
