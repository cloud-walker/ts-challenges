import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {TupleToUnion} from './TupleToUnion'

export type cases = [
  ExpectTrue<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  ExpectTrue<Equal<TupleToUnion<[123]>, 123>>,
]
