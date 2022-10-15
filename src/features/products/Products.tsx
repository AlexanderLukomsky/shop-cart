import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Spinner } from "../../common/components/spinner/Spinner"
import { selectProducts } from "../../common/selectors/selectors"
import { useAppDispatch } from "../../store/store"
import { ProductItem } from "./productItem/ProductItem"
import { fetchProducts } from "./productsReducer"
import './products.scss'

export const Products = () => {
   const products = useSelector(selectProducts)
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])
   return (
      <div className="container">
         <div className="products">
            {
               !!products.items.length && products.items.map(prod => (
                  <ProductItem
                     key={prod.id}
                     product={prod}
                  />
               ))
            }
         </div>
         {products.status === 'pending' && <Spinner />}
      </div>
   )
}