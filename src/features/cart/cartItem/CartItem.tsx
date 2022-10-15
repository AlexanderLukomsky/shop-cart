import { FC } from 'react'
import { useAppDispatch } from '../../../store/store'
import { ProductCard } from '../../products/productCard/ProductCard'
import { Counter } from '../../../common/components/counter/Counter'
import { decrementQuantity, incrementQuantity, removeItem } from '../cartReducer'
import './cartItem.scss'
import { ItemInCartType } from '../../../common/types/commonTypes'
export const CartItem: FC<CartItemPropsType> = ({ itemInCart }) => {
   const dispatch = useAppDispatch()
   const price = itemInCart.quantity * itemInCart.price
   const incrementQuantityHandler = () => {
      dispatch(incrementQuantity({ id: itemInCart.id }))
   }
   const decrementQuantityHandler = () => {
      if (itemInCart.quantity <= 1) {
         dispatch(removeItem({ id: itemInCart.id }))
      } else {
         dispatch(decrementQuantity({ id: itemInCart.id }))
      }
   }
   return (
      <div className='cart-item'>
         <ProductCard product={{ ...itemInCart, price }} />
         <Counter
            quantity={itemInCart.quantity}
            incrementCallback={incrementQuantityHandler}
            decrementCallback={decrementQuantityHandler}
         />
      </div>
   )
}
type CartItemPropsType = {
   itemInCart: ItemInCartType
}