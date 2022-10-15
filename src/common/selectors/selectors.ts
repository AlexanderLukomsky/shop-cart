import { AppRootStateType } from './../../store/store';
export const selectProducts = (state: AppRootStateType) => state.products
export const selectCart = (state: AppRootStateType) => state.cart
export const selectApp = (state: AppRootStateType) => state.app