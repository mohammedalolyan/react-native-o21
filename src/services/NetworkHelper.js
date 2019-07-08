import axios from 'axios'
import { Config } from '@common'

class NetworkHelper {

  static requestPost(url, params, headers = null) {
    return NetworkHelper.requestHttp('POST', url, params, headers)
  }

  static requestGet(url, headers = null) {
    return NetworkHelper.requestHttp('GET', url, null, headers)
  }

  static requestPut(url, params, headers = null) {
    return NetworkHelper.requestHttp('PUT', url, params, headers)
  }

  static requestPatch(url, params, headers = null) {
    return NetworkHelper.requestHttp('PATCH', url, params, headers)
  }

  static requestDelete(url, params, headers = null) {
    return NetworkHelper.requestHttp('DELETE', url, params, headers)
  }

  static requestPostForm(url, params, token) {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': `Bearer ${token}`
    }
    return NetworkHelper.request('POST', url, params, headers);
  }

  static request(method, url, params, header) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        url,
        headers: {}
      }
      if (params) {
        options.data = params
      }
      for (var i in header) {
        options.headers[i] = header[i];
      }
      axios(options)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    });
  }

  static getWordpresURL(uri, params) {
    var url = Config.SiteURL.baseURL + "/wp-json/wc/v2/" + uri + "?consumer_key=" + Config.SiteURL.consumerKey + "&consumer_secret=" + Config.SiteURL.consumerSecret;
    if (params) {
      url += '&' + params
    }
    return url;
  }

  static requestHttp(method, url, params, token) {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (token) {
      headers['Authorization'] = 'Bearer ' + token
    }
    return new Promise((resolve, reject) => {
      NetworkHelper.request(method, url, params, headers)
        .then((response) => {
          resolve({ statusCode: response.status, body: response.data })
        })
        .catch((error) => {
          if (error.response != undefined) {
            resolve({ statusCode: error.response.status, body: error.response.data })
          } else {
            reject("Can not connect to server")
          }
        })
    })
  }
}

export default NetworkHelper
