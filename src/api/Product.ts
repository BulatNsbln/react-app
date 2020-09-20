import { ProductType } from '../types';
const data = require('../data/index.json');

export default class Product {
  static all (): Promise<Array<ProductType>> {
    return Promise.resolve(data.list);
  }
}
