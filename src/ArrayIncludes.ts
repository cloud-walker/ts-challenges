import {Equal} from './Equal'

export type ArrayIncludes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest,
]
  ? Equal<First, U> extends true
    ? true
    : ArrayIncludes<Rest, U>
  : false
