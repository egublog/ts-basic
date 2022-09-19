interface Bread {
  calories: number
}

// interfaceによる宣言のマージ
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

// インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}
