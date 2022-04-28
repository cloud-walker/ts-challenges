import {IfNever} from './IfNever'

export type Permutation<U, K = U> = IfNever<
  U,
  [],
  K extends K ? [K, ...Permutation<Exclude<U, K>>] : never
>
