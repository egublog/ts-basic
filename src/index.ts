// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World')
// world.sayHello(root)

// 基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from 'basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 関数の型定義
import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
logMessage2('Hello')
logMessage3('TS')
logMessage4('JS')
isUserSignedIn('ABC', 'ToraHack')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log(sum)
