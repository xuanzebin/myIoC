import { ClothInterface } from '../types/cloth'

export default class Cloth implements ClothInterface {
  price

  color

  constructor () {
    this.price = 100
    this.color = '红色'
  }

  introduceCloth () {
    return `
      我穿的衣服是${this.color}的，价格为${this.price}块
    `
  }
}