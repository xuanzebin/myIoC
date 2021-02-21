import 'reflect-metadata'

import { Container } from './toyIoC'
import { PeopleInterface } from './types/people'

// IoC容器实例化
const container = new Container()
// 获取完成依赖注入后的People类的实例
const people = container.get<PeopleInterface>('PEOPLE')

// 调用实例方法，检验是否正常注入
console.log(people.getHatIntroduce())
console.log(people.getClothIntroduce())