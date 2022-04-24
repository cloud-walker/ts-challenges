export type ArrayPop<T extends readonly unknown[]> = T extends [
  ...infer Tail,
  unknown,
]
  ? Tail
  : never
