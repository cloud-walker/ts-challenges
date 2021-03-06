export type ArrayFirst<T extends unknown[]> = T extends [
  infer First,
  ...unknown[],
]
  ? First
  : never
