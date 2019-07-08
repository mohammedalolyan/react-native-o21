import NetworkHelper from './NetworkHelper'


export const getCategories = () => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL('products/categories', 'hide_empty=true&parent=0')
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          resovle(response.body)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}

export const getSubCategories = (parentId) => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL("products/categories", "hide_empty=true&parent=" + parentId)
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          var items = [{ id: -1, name: 'All', active: true }];
          items = items.concat(response.body)
          resovle(items)
        } else {
          reject(repsonse.body.message)
        }
      })
      .catch(reject)
  })
}

