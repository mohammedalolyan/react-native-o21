import _ from "lodash"

export const isNotEmpty = (str) => {
  return str && str.length > 0
}

export const getAttributeOptions = (attributes, name) => {
  var obj = _.find(attributes, o => o.name == name)
  if (obj) {
    return obj.options
  }
}