export type ReadonlyDeep<T> = keyof T extends never
  ? T
  : {
      readonly [key in keyof T]: ReadonlyDeep<T[key]>
    }
