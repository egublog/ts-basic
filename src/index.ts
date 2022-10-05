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
// import { logMessage, logMessage2, logMessage3, logMessage4, logMessage6, logMessage7 } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('Hello TypeScript!')
// logMessage2('Hello')
// logMessage3('TS')
// logMessage4('JS')
// logMessage6('省略シグネチャ')
// logMessage7('完全型シグネチャ')
// isUserSignedIn('ABC', 'ToraHack')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000) // NOTE: 何個でも引数を渡せる
// console.log(sum)

// ジェネリック型とポリモーフィズム
// import genericsBasicSample from 'generics/basic'
// import genericsAdvancedSample from 'generics/advanced'

// genericsBasicSample()
// genericsAdvancedSample()

// 非同期処理

// import callbackSample from 'asynchronous/callback'
// import promiseSample from 'asynchronous/promise'
import asyncAwaitSample from 'asynchronous/asyncAwait'

// callbackSample()
// promiseSample()
asyncAwaitSample()
