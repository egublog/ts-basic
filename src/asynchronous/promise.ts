export default function promiseSample() {
  const url = 'https://api.github.com/users/egublog'

  const fetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          // レスポンスのBodyをJSONで読み取った結果を返す
          res
            .json()
            .then((json) => {
              console.log('Asynchronous Promise Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }
}
