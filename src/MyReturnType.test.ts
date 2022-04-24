import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyReturnType} from './MyReturnType'

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => (v ? 1 : 2)
const fn1 = (v: boolean, w: any) => (v ? 1 : 2)

export type cases = [
  ExpectTrue<Equal<string, MyReturnType<() => string>>>,
  ExpectTrue<Equal<123, MyReturnType<() => 123>>>,
  ExpectTrue<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  ExpectTrue<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  ExpectTrue<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  ExpectTrue<Equal<1 | 2, MyReturnType<typeof fn>>>,
  ExpectTrue<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]
