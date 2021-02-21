const INJECT_METADATA_KEY = 'TOYLOC:INJECT'

export default (beanName: string) => {
  return (target: any, propertyKey: string) => {
    let paramsOrPropertiesMetadata: {[name: string] : string} = {}

    if (Reflect.hasOwnMetadata(INJECT_METADATA_KEY, target)) {
      paramsOrPropertiesMetadata = Reflect.getMetadata(INJECT_METADATA_KEY, target)
    }
    
    paramsOrPropertiesMetadata[propertyKey] = beanName
    Reflect.defineMetadata(INJECT_METADATA_KEY, paramsOrPropertiesMetadata, target)
  }
}