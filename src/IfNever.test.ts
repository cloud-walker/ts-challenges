import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {IfNever} from './IfNever'

export type cases = [
  ExpectTrue<Equal<IfNever<never, 'fizz', 'buzz'>, 'fizz'>>,
  ExpectTrue<Equal<IfNever<[], 'fizz', 'buzz'>, 'buzz'>>,
]
