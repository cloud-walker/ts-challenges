import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyAwaited} from './MyAwaited'

type X = Promise<string>
type Y = Promise<{field: number}>
type Z = Promise<Promise<string | number>>

type cases = [
  ExpectTrue<Equal<MyAwaited<X>, string>>,
  ExpectTrue<Equal<MyAwaited<Y>, {field: number}>>,
  ExpectTrue<Equal<MyAwaited<Z>, string | number>>,
  // @ts-expect-error
  MyAwaited<number>,
]
