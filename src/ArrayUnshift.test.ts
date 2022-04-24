import {ArrayUnshift} from './ArrayUnshift'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayUnshift<[], 1>, [1]>>,
  ExpectTrue<Equal<ArrayUnshift<[1, 2], 0>, [0, 1, 2]>>,
  ExpectTrue<
    Equal<ArrayUnshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>
  >,
  ExpectTrue<
    Equal<
      ArrayUnshift<['1', 2, '3'], {foo: 'bar'}>,
      [{foo: 'bar'}, '1', 2, '3']
    >
  >,
]
