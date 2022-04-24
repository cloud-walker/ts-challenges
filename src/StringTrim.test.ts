import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringTrim} from './StringTrim'

export type cases = [
  ExpectTrue<Equal<StringTrim<'str'>, 'str'>>,
  ExpectTrue<Equal<StringTrim<' str'>, 'str'>>,
  ExpectTrue<Equal<StringTrim<'     str'>, 'str'>>,
  ExpectTrue<Equal<StringTrim<'str   '>, 'str'>>,
  ExpectTrue<Equal<StringTrim<'     str     '>, 'str'>>,
  ExpectTrue<Equal<StringTrim<'   \n\t foo bar \t'>, 'foo bar'>>,
  ExpectTrue<Equal<StringTrim<''>, ''>>,
  ExpectTrue<Equal<StringTrim<' \n\t '>, ''>>,
]
