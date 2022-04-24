import {ArrayIncludes} from './ArrayIncludes'
import {ExpectFalse, ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<ArrayIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>>,
  ExpectFalse<ArrayIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>>,
  ExpectTrue<ArrayIncludes<[1, 2, 3, 5, 6, 7], 7>>,
  ExpectFalse<ArrayIncludes<[1, 2, 3, 5, 6, 7], 4>>,
  ExpectTrue<ArrayIncludes<[1, 2, 3], 2>>,
  ExpectTrue<ArrayIncludes<[1, 2, 3], 1>>,
  ExpectFalse<ArrayIncludes<[{}], {a: 'A'}>>,
  ExpectFalse<ArrayIncludes<[boolean, 2, 3, 5, 6, 7], false>>,
  ExpectFalse<ArrayIncludes<[true, 2, 3, 5, 6, 7], boolean>>,
  ExpectTrue<ArrayIncludes<[false, 2, 3, 5, 6, 7], false>>,
  ExpectFalse<ArrayIncludes<[{a: 'A'}], {readonly a: 'A'}>>,
  ExpectFalse<ArrayIncludes<[{readonly a: 'A'}], {a: 'A'}>>,
  ExpectFalse<ArrayIncludes<[1], 1 | 2>>,
  ExpectFalse<ArrayIncludes<[1 | 2], 1>>,
  ExpectFalse<ArrayIncludes<[null], undefined>>,
  ExpectFalse<ArrayIncludes<[undefined], null>>,
]
