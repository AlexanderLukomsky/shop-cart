import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import { appPath } from "../common/appPath";
import { Header } from "../common/components/header/Header";
import { Spinner } from '../common/components/spinner/Spinner';
import { selectApp, selectCart } from '../common/selectors/selectors';
import { setInLocalStorage } from '../common/utils/utils';
import { Cart } from "../features/cart/Cart";
import { setCartTotalCost } from '../features/cart/cartReducer';
import { Products } from "../features/products/Products";
import { useAppDispatch } from '../store/store';
import './app.scss';
import { initializeApp } from './appReducer';

export const App = () => {
  const dispatch = useAppDispatch()
  const { isInitialized } = useSelector(selectApp)
  const cart = useSelector(selectCart)
  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  useEffect(() => {
    setInLocalStorage('cart', { items: cart.items })
    dispatch(setCartTotalCost())
  }, [dispatch, cart.items])

  if (!isInitialized) { return <Spinner /> }

  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to={appPath.PRODUCTS} />} />
        <Route path={appPath.PRODUCTS} element={<Products />} />
        <Route path={appPath.CART} element={<Cart />} />
      </Routes>
    </>
  )

}

