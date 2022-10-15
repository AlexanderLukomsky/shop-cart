export type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed'
export type ItemInCartType = ProductType & { quantity: number }
export type ProductType = {
   img: string,
   title: string,
   description: string,
   price: number,
   id: string
}