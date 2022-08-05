export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10 // NOTE: unknownなのでエラーになる

  // NOTE: typeof使って条件分岐する
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
