import {Equal} from './Equal'
import {ExpectFalse, ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<true, true>>,
  ExpectTrue<Equal<'foo', 'foo'>>,
  ExpectTrue<Equal<{value: number}, {value: number}>>,

  ExpectFalse<Equal<'foo', string>>,
  ExpectFalse<Equal<true, false>>,
  ExpectFalse<Equal<{value: number}, {value: string}>>,
]
