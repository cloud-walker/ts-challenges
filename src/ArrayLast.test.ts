import {ArrayLast} from './ArrayLast'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayLast<[3, 2, 1]>, 1>>,
  ExpectTrue<Equal<ArrayLast<[() => 123, {a: string}]>, {a: string}>>,
]
