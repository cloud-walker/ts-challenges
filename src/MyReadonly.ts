import {MyOmit} from './MyOmit'
import {MyPick} from './MyPick'

type Flatten<T> = {[key in keyof T]: T[key]}

export type MyReadonly<T, U extends keyof T = keyof T> = Flatten<
  MyOmit<T, U> & {readonly [key in keyof MyPick<T, U>]: T[key]}
>
