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
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2 } from './function/parameters'

logMessage('Hello TypeScript!')
isUserSignedIn('ABC', 'ToraHack')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
