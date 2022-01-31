export function createDynamicStyle<T>(
  commonStyle: T,
): T {
  function setMeasurements(unit: number): string {
    return `${unit}px`
  }

  Object.values(commonStyle).forEach((value) => {

    Object.keys(value).forEach((key: any) => {
      if (typeof value[key] === 'number') {
        value[key] = setMeasurements(value[key])
      }
    })
  })

  return commonStyle
}
