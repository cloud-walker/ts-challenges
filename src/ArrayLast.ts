export type ArrayLast<T extends readonly unknown[]> = T extends [
  ...unknown[],
  infer Last,
]
  ? Last
  : never
