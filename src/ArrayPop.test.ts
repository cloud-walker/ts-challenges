import {ArrayPop} from './ArrayPop'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayPop<[3, 2, 1]>, [3, 2]>>,
  ExpectTrue<Equal<ArrayPop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]
