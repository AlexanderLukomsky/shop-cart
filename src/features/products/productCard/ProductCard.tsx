import { FC } from 'react'
import { ProductType } from '../../../common/types/commonTypes'
import './productCard.scss'
export const ProductCard: FC<ProductCardPropsType> = ({ product }) => {
   return (
      <div className='product-card'>
         <div className='product-card__imageBox'>
            <img className='product-card__imageBox'
               src={'https://freight.cargo.site/t/original/i/e584b38049ec27fea8d3c929412f875f4e58bcd1e9aaaed582d89fa3fd53987f/PERF_o.jpg'}
               alt={product.title}
            />
         </div>
         <div className={'product-card__info'}>
            <div className='product-card__title'>
               {product.title}
            </div>
            <div className='product-card__description'>
               {product.description}
            </div>
            <div className='product-card__price'>
               <span className='product-card__price-text'>price:</span>
               <span className='product-card__price-number'>{product.price}</span>
            </div>
         </div>
      </div>
   )
}
type ProductCardPropsType = {
   product: ProductType
}