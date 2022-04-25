import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {FunctionAppendArg} from './FunctionAppendArg'

type Case1 = FunctionAppendArg<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = FunctionAppendArg<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  ExpectTrue<Equal<Case1, Result1>>,
  ExpectTrue<Equal<Case2, Result2>>,
]
