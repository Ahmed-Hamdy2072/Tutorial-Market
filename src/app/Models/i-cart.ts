export interface ICart {
  item: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {}
  }, quantity: number
}
