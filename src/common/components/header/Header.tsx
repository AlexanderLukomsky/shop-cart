import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import { appPath } from "../../appPath";
import { selectCart } from '../../selectors/selectors';
import { TotalCost } from '../totalCost/TotalCost';
import './header.scss';
export const Header = () => {
   const { pathname } = useLocation()
   const cart = useSelector(selectCart)
   return (
      <div className="header">
         <div className="container">
            <div className={`header__row${pathname === appPath.CART ? ' cart' : ''}`}>
               {
                  pathname === appPath.CART ?
                     <NavLink className='header__link' to={appPath.PRODUCTS}>Main</NavLink>
                     :
                     <>
                        {!!cart.totalCost && <TotalCost totalCost={cart.totalCost} />}
                        <NavLink className='header__link' to={appPath.CART}>Cart</NavLink>
                     </>
               }
            </div>
         </div>
      </div>
   )
}