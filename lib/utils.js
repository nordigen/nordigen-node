
/**
 * Filter false values from object
 * @param {Object} obj
 * @returns A new object with truthy values
*/
export const filterObject = (obj) => {
    return Object.keys(obj || {}).reduce((acc, key) => {
      if (obj[key]) {
        acc[key] = obj[key]
      }

      return acc
    }, {})
  }
