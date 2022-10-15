import { FC } from 'react'
export const InputItem: FC<InputItemPropsType> = ({ onChange, value, placeholder, type, error }) => {
   return (
      <li className={`item${error ? ` error` : ''}`}>
         <input
            onChange={(e) => { onChange(e.currentTarget.value) }}
            value={value}
            className="item__value"
            type={type}
            placeholder={placeholder}
         />
      </li>
   )
}
type InputItemPropsType = {
   onChange: (value: string) => void
   value: string
   placeholder: string
   type: string
   error?: boolean
}