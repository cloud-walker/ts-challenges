import {Chainable} from './Chainable'
import {Equal} from './Equal'
import {ExpectTrue} from './Expect'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', {value: 'Hello World'})
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

type result1 = typeof result1
type result2 = typeof result2

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

export type cases = [
  ExpectTrue<Equal<result1, Expected1>>,
  ExpectTrue<Equal<result2, Expected2>>,
]
