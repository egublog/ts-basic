export default function callbackSample() {
  const url = 'https://api.github.com/users/egublog'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          // レスポンスボディの読み取りが完了するまで待つ
          res
            .json()
            .then((json) => {
              console.log('Asynchronous Callback Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile)
}
