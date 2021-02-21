import * as _ from 'lodash'

import dependencyMap from '../config'
import { BeanMap } from '../types/container'


const INJECT_METADATA_KEY = 'TOYLOC:INJECT'

export default class Container {
  beanMap: BeanMap = {}

  constructor () {
    this.dependencyInject()
  }

  get<T>(beanName: string): T {
    return this.beanMap[beanName]
  }

  dependencyInject () {
    _.forOwn(dependencyMap, (beanClass, beanName) => {
      this.beanMap[beanName] = new beanClass()
    })

    _.forOwn(this.beanMap, beanInstance => {
      const data = Reflect.getMetadata(INJECT_METADATA_KEY, beanInstance)
      
      _.forOwn(data, (dependencyName, propertyKey) => {
        beanInstance[propertyKey] = this.beanMap[dependencyName]
      })
    })
  }
}

