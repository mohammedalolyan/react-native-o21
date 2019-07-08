import NetworkHelper from './NetworkHelper'


export const getProductByCategory = (categoryId, page, per_page) => {
  return new Promise((resolve, reject) => {
    var url = NetworkHelper.getWordpresURL('products', "page=" + page + "&per_page=" + per_page + "&category=" + categoryId)
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          resolve(response.body)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}

export const search = (text, page, per_page) => {
  return new Promise((resolve, reject) => {
    var url = NetworkHelper.getWordpresURL('products', "page=" + page + "&per_page=" + per_page + "&search=" + text)
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          resolve(response.body)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}