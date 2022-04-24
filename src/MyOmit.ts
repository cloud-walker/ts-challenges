import {MyExclude} from './MyExclude'

export type MyOmit<T, U extends keyof T> = {
  [key in MyExclude<keyof T, U>]: T[key]
}
