import { Autowired, Inject } from '../toyIoC'

import { HatInterface } from '../types/hat'
import { ClothInterface } from '../types/cloth'
import { PeopleInterface } from '../types/people'

export default class People implements PeopleInterface {
  @Inject('HAT') hat: HatInterface

  @Autowired('CLOTH') cloth: ClothInterface

  getHatIntroduce () {
    return this.hat.introduceHat()
  }

  getClothIntroduce () {
    return this.cloth.introduceCloth()
  }
}