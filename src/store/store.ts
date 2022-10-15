import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../app/appReducer";
import { productsReducer } from "../features/products/productsReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { cartReducer } from "../features/cart/cartReducer";
const rootReducer = combineReducers({
   app: appReducer,
   products: productsReducer,
   cart: cartReducer
})
export const store = configureStore({ reducer: rootReducer })


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

