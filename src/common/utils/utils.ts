export const getInLocalStorage = <T>(key: string) => {
   const dataAsString = localStorage.getItem(key)
   if (dataAsString) {
      const data: T = JSON.parse(dataAsString)
      return data
   }
   return undefined
}
export const setInLocalStorage = (key: string, data: any) => {
   localStorage.setItem(key, JSON.stringify(data))
}
export const simpleValidation = (object: { [key: string]: string }, callback: (obj: any) => void) => {
   let error = false
   for (const key in object) {
      const k = key as keyof typeof object;
      const elem = object[k]
      if (elem.trim() === '') {
         callback((obj: any) => ({ ...obj, [k]: true }))
         error = true
      }
   }
   return error ? true : false
}