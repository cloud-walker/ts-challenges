import {ArrayFirst} from './ArrayFirst'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<Equal<ArrayFirst<[3, 2, 1]>, 3>>,
  ExpectTrue<Equal<ArrayFirst<[() => 123, {a: string}]>, () => 123>>,
  ExpectTrue<Equal<ArrayFirst<[]>, never>>,
  ExpectTrue<Equal<ArrayFirst<[undefined]>, undefined>>,
  // @ts-expect-error
  ArrayFirst<'notArray'>,
  // @ts-expect-error
  ArrayFirst<{0: 'arrayLike'}>,
]
