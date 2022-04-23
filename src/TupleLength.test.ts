import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {TupleLength} from './TupleLength'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
] as const

export type cases = [
  ExpectTrue<Equal<TupleLength<typeof tesla>, 4>>,
  ExpectTrue<Equal<TupleLength<typeof spaceX>, 5>>,
  // @ts-expect-error
  TupleLength<5>,
  // @ts-expect-error
  TupleLength<'hello world'>,
]
