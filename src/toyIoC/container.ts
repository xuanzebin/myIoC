import * as _ from 'lodash'

import dependencyMap from '../config'
import { BeanMap } from '../types/container'


const INJECT_METADATA_KEY = 'TOYIOC:INJECT'

export default class Container {
  /*
   * 存储 Bean 实例
   */
  beanMap: BeanMap = {}

  constructor () {
    this.dependencyInject()
  }

  /*
   * 取出 Bean 实例
   */
  get<T>(beanName: string): T {
    return this.beanMap[beanName]
  }

  /*
   * 将 Bean 实例化并用 Map 存储下来，初始化 Bean 之间的依赖关系，注入对应依赖
   */
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

