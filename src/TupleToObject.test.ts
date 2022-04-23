import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {TupleToObject} from './TupleToObject'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

export type cases = [
  ExpectTrue<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,

  // @ts-expect-error
  TupleToObject<[[1, 2], {}]>,
]
