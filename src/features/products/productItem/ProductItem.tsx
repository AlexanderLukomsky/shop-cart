import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appPath } from '../../../common/appPath'
import { selectCart } from '../../../common/selectors/selectors'
import { ProductType } from '../../../common/types/commonTypes'
import { useAppDispatch } from '../../../store/store'
import { addItemCart } from '../../cart/cartReducer'
import { ProductCard } from '../productCard/ProductCard'
import './productItem.scss'
export const ProductItem: FC<ProductItemPropsType> = ({ product }) => {
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { items } = useSelector(selectCart)
   const inCart = items.find(item => item.id === product.id)
   const addItemCartHandler = () => {
      dispatch(addItemCart(product))
   }
   return (
      <div className='product-item'>
         <ProductCard product={product} />
         {
            inCart ?
               <button className='product-item__button nav-button' onClick={() => { navigate(appPath.CART) }}>added to cart</button>
               :
               <button className='product-item__button' onClick={addItemCartHandler}>buy</button>
         }
      </div>
   )
}
type ProductItemPropsType = {
   product: ProductType
}

