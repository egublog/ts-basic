export default function notExistSample() {
  // null
  const name = null
  console.log('not exist sample 1:', typeof name, name)

  if (!name) {
    console.log('not exist sample 2:', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('not exist sample 3:', '吾輩は猫である。名前は' + name)
  }

  // undefined
  const age = undefined
  console.log('not exist sample 4:', typeof age, age)

  if (!age) {
    console.log('not exist sample 5:', '年齢は秘密です')
  } else {
    console.log('not exist sample 6:', '年齢は' + age + 'です。')
  }
}
