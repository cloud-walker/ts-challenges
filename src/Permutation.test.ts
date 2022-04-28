import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {Permutation} from './Permutation'

export type cases = [
  ExpectTrue<Equal<Permutation<'A'>, ['A']>>,
  ExpectTrue<
    Equal<
      Permutation<'A' | 'B' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  ExpectTrue<
    Equal<
      Permutation<'B' | 'A' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  ExpectTrue<Equal<Permutation<never>, []>>,
]
