import { FC } from 'react'
import './totalCost.scss'
export const TotalCost: FC<TotalCostPropsType> = ({ totalCost }) => (
   <div className='total-cost'>Total: <span className='total-cost-number'>{totalCost}</span></div>
)
type TotalCostPropsType = {
   totalCost: number
}