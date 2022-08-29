export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result.push(fn(array[i]))
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)
}
