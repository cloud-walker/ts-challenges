import {Concat} from './Concat'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<Concat<[], []>, []>>,
  ExpectTrue<Equal<Concat<[], [1]>, [1]>>,
  ExpectTrue<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  ExpectTrue<
    Equal<
      Concat<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >,
]
