import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringReplaceAll} from './StringReplaceAll'

export type cases = [
  ExpectTrue<Equal<StringReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  ExpectTrue<Equal<StringReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  ExpectTrue<Equal<StringReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  ExpectTrue<Equal<StringReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  ExpectTrue<Equal<StringReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  ExpectTrue<Equal<StringReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  ExpectTrue<Equal<StringReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  ExpectTrue<Equal<StringReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  ExpectTrue<Equal<StringReplaceAll<'', '', ''>, ''>>,
]
