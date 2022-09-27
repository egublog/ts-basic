export default function callbackSample() {
  const url = 'https://api.github.com/users/egublog'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url).then((res) => {
      // レスポンスのBodyをJSONとして読み取り
      res
        .json()
        .then((json) => {
          console.log('Asynchronous Callback Sample 1:', json)
          return json
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile)
}
