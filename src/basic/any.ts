export default function anySample() {
  let name: any = 'Tora' // string型を代入したよ
  console.log('any sample 1:', typeof name, name)

  name = 28 // number型を代入したよ
  console.log('any sample 2:', typeof name, name)
}
