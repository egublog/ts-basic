// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! UserName is', userName)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in.')
    return false
  }
}
