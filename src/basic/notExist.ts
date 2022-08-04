export default function notExistSample() {
  const name = null
  console.log('not exist sample 1:', typeof name, name)

  if (!name) {
    console.log('not exist sample 2:', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('not exist sample 3:', '吾輩は猫である。名前は' + name)
  }
}
