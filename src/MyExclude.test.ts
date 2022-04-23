import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyExclude} from './MyExclude'

export type cases = [
  ExpectTrue<
    Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>
  >,
  ExpectTrue<
    Equal<
      MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
      Exclude<'a' | 'b' | 'c', 'a' | 'b'>
    >
  >,
  ExpectTrue<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >,
]
