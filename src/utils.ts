export const setOfEnumValues = <T extends string>(e: Object) => {
  return new Set(Object.keys(e).filter((v) => isNaN(Number(v))) as T[])
}