const INJECT_METADATA_KEY = 'TOYIOC:INJECT'

// 通过Reflect给Bean添加对应的元数据，即将这个类依赖的信息标记到类的原型上
export default (beanName: string) => {
  return (target: any, propertyKey: string) => {
    let paramsOrPropertiesMetadata: {[name: string] : string} = {}

    // 检查是否之前已经标记过了，如果是，则取出更新即可
    if (Reflect.hasOwnMetadata(INJECT_METADATA_KEY, target)) {
      paramsOrPropertiesMetadata = Reflect.getMetadata(INJECT_METADATA_KEY, target)
    }
    
    // 更新元信息
    paramsOrPropertiesMetadata[propertyKey] = beanName
    Reflect.defineMetadata(INJECT_METADATA_KEY, paramsOrPropertiesMetadata, target)
  }
}