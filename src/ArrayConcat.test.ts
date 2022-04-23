import {ArrayConcat} from './ArrayConcat'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayConcat<[], []>, []>>,
  ExpectTrue<Equal<ArrayConcat<[], [1]>, [1]>>,
  ExpectTrue<Equal<ArrayConcat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  ExpectTrue<
    Equal<
      ArrayConcat<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >,
]
