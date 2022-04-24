type FlattenIntersections<T> = {[key in keyof T]: T[key]}

export type Chainable<T = {}> = {
  get: () => T
  option: <K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ) => Chainable<
    FlattenIntersections<{[key in keyof T]: T[key]} & {[key in K]: V}>
  >
}
