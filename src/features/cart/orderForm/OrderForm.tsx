import { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { appPath } from '../../../common/appPath'
import { InputItem } from '../../../common/components/inputItem/InputItem'
import { simpleValidation } from '../../../common/utils/utils'
import { useAppDispatch } from '../../../store/store'
import { sentOrder } from '../cartReducer'
import './orderForm.scss'
export const OrderForm: FC<OrderFormPropsType> = ({ isEmpty }) => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [errors, setErrors] = useState({ name: false, surname: false, address: false, phone: false })
   const onChangeName = (value: string) => {
      setErrors(errors => ({ ...errors, name: false }))
      setName(value)
   }
   const onChangeSurname = (value: string) => {
      setErrors(errors => ({ ...errors, surname: false }))
      setSurname(value)
   }
   const onChangeAddress = (value: string) => {
      setErrors(errors => ({ ...errors, address: false }))
      setAddress(value)
   }
   const onChangePhone = (value: string) => {
      setErrors(errors => ({ ...errors, phone: false }))
      setPhone(value)
   }
   const onOrderClick = async () => {
      if (isEmpty) {
         alert('cart is empty')
         return
      }
      const clientInfo = {
         name, surname, address, phone
      }
      const isError = simpleValidation(clientInfo, setErrors)
      if (isError) return
      const action = await dispatch(sentOrder(clientInfo))
      if (sentOrder.fulfilled.match(action)) {
         alert(action.payload)
         navigate(appPath.PRODUCTS)
      } else {
         alert('some error')
      }
   }
   return (
      <ul className="order-form">
         <InputItem
            onChange={onChangeName}
            value={name}
            type="text"
            placeholder={errors.name ? "Name is required" : "Name"}
            error={errors.name}
         />
         <InputItem
            onChange={onChangeSurname}
            value={surname}
            type="text"
            placeholder={errors.surname ? "Surname is required" : "Surname"}
            error={errors.surname}
         />
         <InputItem
            onChange={onChangeAddress}
            value={address}
            type="text"
            placeholder={errors.address ? "Address is required" : "Address"}
            error={errors.address}
         />
         <InputItem
            onChange={onChangePhone}
            value={phone}
            type="phone"
            placeholder={errors.phone ? "Phone is required" : "Phone"}
            error={errors.phone}
         />
         <button className="order-form__button" onClick={onOrderClick}>ORDER</button>
      </ul>
   )
}
type OrderFormPropsType = {
   isEmpty: boolean
}