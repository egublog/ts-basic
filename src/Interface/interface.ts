interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで宣言した場合
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // NOTE: Intersection Types

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}
