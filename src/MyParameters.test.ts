import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyParameters} from './MyParameters'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

export type cases = [
  // @ts-expect-error
  MyParameters<number>,

  ExpectTrue<Equal<MyParameters<typeof foo>, [string, number]>>,
  ExpectTrue<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
  ExpectTrue<Equal<MyParameters<typeof baz>, []>>,
]
