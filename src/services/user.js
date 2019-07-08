import NetworkHelper from './NetworkHelper'
import { Config } from '@common'


export const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    var url = Config.SiteURL.baseURL + '/wp-json/jwt-auth/v1/token'
    var data = {
      username,
      password
    }
    NetworkHelper.requestPost(url, data)
      .then((response) => {
        if (response.statusCode == 200) {
          resolve(response.body)
        } else if (response.statusCode == 403) {
          reject('Email or password is incorrect')
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}

export const getUserInfo = (userId) => {
  return new Promise((resolve, reject) => {
    var url = NetworkHelper.getWordpresURL("customers/" + userId)
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

export const getCustomerInfo = (token) => {
  return new Promise((resolve, reject) => {
    getUserId(token)
      .then((response) => {
        let userId = response.id
        console.log(userId)
        getUserInfo(userId)
          .then((userInfo) => {
            resolve(userInfo)
          })
          .catch(reject)
      })
      .catch(reject)
  })
}

export const getUserId = (token) => {
  return new Promise((resovle, reject) => {
    var url = Config.SiteURL.baseURL + '/wp-json/wp/v2/users/me'
    NetworkHelper.requestGet(url, token)
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

export const signUp = (first_name, last_name, email, password) => {
  return new Promise((resolve, reject) => {
    let url = NetworkHelper.getWordpresURL('customers')
    var data = {
      email,
      first_name,
      last_name,
      password
    }
    NetworkHelper.requestPost(url, data)
      .then((response) => {
        if (response.statusCode == 201) {
          resolve(response.body)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}