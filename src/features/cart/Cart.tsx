import { useSelector } from "react-redux"
import { selectCart } from "../../common/selectors/selectors"
import { CartItem } from "./cartItem/CartItem"
import './cart.scss'
import { TotalCost } from "../../common/components/totalCost/TotalCost"
import { OrderForm } from "./orderForm/OrderForm"
import { Spinner } from "../../common/components/spinner/Spinner"

export const Cart = () => {
   const cart = useSelector(selectCart)
   return (
      <div className="container">
         <div className="cart">
            <div className="cart__items">
               {
                  cart.items.map(item =>
                     <CartItem key={item.id} itemInCart={item} />
                  )
               }
            </div>
            <div className="cart__form">
               <OrderForm isEmpty={cart.items.length === 0} />
            </div>
         </div>
         {!!cart.totalCost && <TotalCost totalCost={cart.totalCost} />}
         {cart.status === 'pending' && <Spinner />}
      </div>
   )
}