import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringReplace} from './StringReplace'

export type cases = [
  ExpectTrue<Equal<StringReplace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  ExpectTrue<Equal<StringReplace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  ExpectTrue<Equal<StringReplace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  ExpectTrue<Equal<StringReplace<'foobarbar', 'bar', ''>, 'foobar'>>,
  ExpectTrue<Equal<StringReplace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  ExpectTrue<Equal<StringReplace<'', '', ''>, ''>>,
]
