import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringLength} from './StringLength'

export type cases = [
  ExpectTrue<Equal<StringLength<''>, 0>>,
  ExpectTrue<Equal<StringLength<'kumiko'>, 6>>,
  ExpectTrue<Equal<StringLength<'reina'>, 5>>,
  ExpectTrue<Equal<StringLength<'Sound! Euphonium'>, 16>>,
]
