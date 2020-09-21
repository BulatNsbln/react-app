export type ProductType = {
  id: number,
  category: string,
  name: string,
  type: string,
  numberOfServings: number,
  presents: Array<string>,
  weight: number,
  available: true,
  image: {
    url: string,
    url2x: string,
    url3x: string,
  },
}
