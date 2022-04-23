export type TupleToObject<T extends ReadonlyArray<string | number | symbol>> = {
  [key in T[number]]: key
}
