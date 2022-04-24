import {ArrayPush} from './ArrayPush'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayPush<[], 1>, [1]>>,
  ExpectTrue<Equal<ArrayPush<[1, 2], '3'>, [1, 2, '3']>>,
  ExpectTrue<Equal<ArrayPush<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  ExpectTrue<
    Equal<ArrayPush<['1', 2, '3'], {foo: 'bar'}>, ['1', 2, '3', {foo: 'bar'}]>
  >,
]
