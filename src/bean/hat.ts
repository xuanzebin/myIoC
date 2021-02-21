import { HatInterface } from '../types/hat'

export default class Hat implements HatInterface {
  price

  color

  constructor () {
    this.price = 50
    this.color = '绿色'
  }

  introduceHat () {
    return `
      我戴的帽子是${this.color}的，价格为${this.price}块
    `
  }
}