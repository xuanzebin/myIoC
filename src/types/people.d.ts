import { ClothInterface } from './cloth.d'

export interface PeopleInterface {
  cloth: ClothInterface

  getHatIntroduce: () => string

  getClothIntroduce: () => string
}