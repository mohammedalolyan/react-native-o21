import NetworkHelper from './NetworkHelper'


export const getShippingZones = () => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL('shipping/zones')
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

export const getLocationsByZone = (zoneId) => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL("shipping/zones/" + zoneId + "/locations")
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

export const getPaymentMethodsByZone = (zoneId) => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL("shipping/zones/" + zoneId + "/methods")
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          let methods = response.body
          resovle(methods)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}

export const getShippingMethods = async (countryCode) => {
  try {
    const zones = await getShippingZones()
    if (zones && zones.length > 0) {
      let found = false
      for (let i = 0; i < zones.length; i++) {
        let zone = zones[i]
        if (zone.id == 0) continue
        let locations = await getLocationsByZone(zone.id)
        for (let j = 0; j < locations.length; j++) {
          let location = locations[j]
          if (location.code == countryCode) {
            found = true
            let methods = await getPaymentMethodsByZone(zone.id)
            return methods
          }
        }
      }
      if (!found) {
        const methods = await getPaymentMethodsByZone(0)
        return methods
      }
    } else {
      const methods = await getPaymentMethodsByZone(0)
      return methods
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getPaymentMethods = () => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL('payment_gateways')
    NetworkHelper.requestGet(url)
      .then((response) => {
        if (response.statusCode == 200) {
          let methods = response.body
          methods = methods.filter((item) => {
            return item.enabled && item.id == 'cod'
          })
          resovle(methods)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })
}

export const createOrder = (params) => {
  return new Promise((resovle, reject) => {
    let url = NetworkHelper.getWordpresURL('orders')
    NetworkHelper.requestPost(url, params)
      .then((response) => {
        if (response.statusCode == 201) {
          resovle(response.body)
        } else {
          reject(response.body.message)
        }
      })
      .catch(reject)
  })

}