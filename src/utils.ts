import type { IsTruthy, OmitKeysMatching } from "./types/index.js";

/**
 * Filter false values from object
 * @param {Object} obj
 * @returns A new object with truthy values
 */
export const filterObject = <T extends Record<string | number | symbol, unknown>>(obj: T): OmitKeysMatching<T, IsTruthy<T>> => {
  return Object.keys(obj ?? {}).reduce((acc, key) => {
    if (obj[key]) {
      (acc as any)[key] = obj[key];
    }

    return acc;
  }, {}) as OmitKeysMatching<T, IsTruthy<T>>;
};
