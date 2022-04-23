import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {If} from './If'

export type cases = [
  ExpectTrue<Equal<If<true, 'a', 'b'>, 'a'>>,
  ExpectTrue<Equal<If<false, 'a', 2>, 2>>,
  // @ts-expect-error
  If<null, 'a', 'b'>,
]
