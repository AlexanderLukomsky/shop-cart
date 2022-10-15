import { ItemInCartType, ProductType } from './../types/commonTypes';

export const api = {
   getProduct: (endPoint: string) => {
      const promise = new Promise<ProductType[]>(res => {
         setTimeout(() => {
            res(
               [
                  {
                     img: '',
                     title: 'product 1',
                     description: 'some text to describe the product',
                     price: 10,
                     id: '1'
                  },
                  {
                     img: '',
                     title: 'product 2',
                     description: 'some text to describe the product',
                     price: 5,
                     id: '2'
                  },
                  {
                     img: '',
                     title: 'product 3',
                     description: 'some text to describe the product',
                     price: 1,
                     id: '3'
                  },
                  {
                     img: '',
                     title: 'product 4',
                     description: 'some text to describe the product',
                     price: 20,
                     id: '4'
                  },
                  {
                     img: '',
                     title: 'product 5',
                     description: 'some text to describe the product',
                     price: 10,
                     id: '5'
                  },
                  {
                     img: '',
                     title: 'product 6',
                     description: 'some text to describe the product',
                     price: 5,
                     id: '6'
                  },
                  {
                     img: '',
                     title: 'product 7',
                     description: 'some text to describe the product',
                     price: 1,
                     id: '7'
                  }
               ]
            )
         }, 600)
      })
      return promise
   },
   auth: () => {
      const promise = new Promise(res => {
         setTimeout(() => {
            res(true)
         }, 600)
      })
      return promise
   },
   sentOrder: (data: SentOrderRequestType) => {
      const promise = new Promise<string>(res => {
         setTimeout(() => {
            res(JSON.stringify(data))
         }, 600)
      })
      return promise
   }
}
export type ClientInfoType = {
   name: string
   phone: string
   surname: string
   address: string
}
type SentOrderRequestType = {
   clientInfo: ClientInfoType
   order: {
      items: ItemInCartType[]
      totalCost: number
   }

}