import 'reflect-metadata'

import { Container } from './toyLoC'
import { PeopleInterface } from './types/people'

const container = new Container()
const people = container.get<PeopleInterface>('PEOPLE')

console.log(people.getHatIntroduce())
console.log(people.getClothIntroduce())