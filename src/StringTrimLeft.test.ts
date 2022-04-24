import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringTrimLeft} from './StringTrimLeft'

export type cases = [
  ExpectTrue<Equal<StringTrimLeft<'str'>, 'str'>>,
  ExpectTrue<Equal<StringTrimLeft<' str'>, 'str'>>,
  ExpectTrue<Equal<StringTrimLeft<'     str'>, 'str'>>,
  ExpectTrue<Equal<StringTrimLeft<'     str     '>, 'str     '>>,
  ExpectTrue<Equal<StringTrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  ExpectTrue<Equal<StringTrimLeft<''>, ''>>,
  ExpectTrue<Equal<StringTrimLeft<' \n\t'>, ''>>,
]
