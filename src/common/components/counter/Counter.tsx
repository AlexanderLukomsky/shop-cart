import { FC } from 'react'
import './counter.scss'
export const Counter: FC<CartItemCounterPropsType> = ({ quantity, incrementCallback, decrementCallback }) => {
   return (
      <div className='counter'>
         <button className='counter__button' onClick={decrementCallback}>-</button>
         <span className='counter__quantity'>{quantity}</span>
         <button className='counter__button' onClick={incrementCallback}>+</button>
      </div>
   )
}
type CartItemCounterPropsType = {
   incrementCallback: () => void
   decrementCallback: () => void
   quantity: number
}