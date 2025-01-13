/**
 * Excludes from T those keys whose types extend V.
 *
 * @example Given `T = { a: number; b: string; c: number }` and `V = number`, then `OmitKeysMatching<T, V> = { b: string }`.
 */
export type OmitKeysMatching<T, V> = {
  [K in keyof T as T[K] extends V ? never : K]: T[K];
};

export type Falsy = false | 0 | "" | null | undefined;

export type IsTruthy<T> = T extends Falsy ? never : T;

export type IsFalsy<T> = IsTruthy<T> extends never ? T : never;

export type OmitIdParam<T extends { id: string }> = Omit<T, "id">;
