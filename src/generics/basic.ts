export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 1:', stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))

  // このReduce type がGenericsを使えば、GenericReduce typeみたいに、より抽象度高く書ける
  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  // ジェネリック型を使う場合
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3:', genericStringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 4:', genericNumberReduce([100, 200, 300], 1000))

  // 色々なジェネリック型の定義方法
  // 完全な呼び出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }
}
