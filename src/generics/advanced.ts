export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[] // NOTE: コールバック関数

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result.push(fn(array[i]))
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '789', '101112'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result.push(fn(array[i]))
    }
    return result
  }

  const strings = mapNumbersToStrings([123, 456, 789, 101112], (item) => String(item))
  console.log('Generics advanced sample 2:', strings)
}
