export function createDynamicStyle<T>(
  commonStyle: T,
): T {
  function setMeasurements(unit: number): string {
    return `${unit}px`
  }
  Object.values(commonStyle).forEach((value) => {
    const fontSize = value.

    Object.keys(value).forEach((key: number) => {
      if (typeof value[key] === 'number') {
        value[key] = setMeasurements(value[key])
      }
    })
  })

  return commonStyle
}
