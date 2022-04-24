import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {StringCapitalize} from './StringCapitalize'

export type cases = [
  ExpectTrue<Equal<StringCapitalize<'foobar'>, 'Foobar'>>,
  ExpectTrue<Equal<StringCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  ExpectTrue<Equal<StringCapitalize<'foo bar'>, 'Foo bar'>>,
  ExpectTrue<Equal<StringCapitalize<''>, ''>>,
  ExpectTrue<Equal<StringCapitalize<'a'>, 'A'>>,
  ExpectTrue<Equal<StringCapitalize<'b'>, 'B'>>,
  ExpectTrue<Equal<StringCapitalize<'c'>, 'C'>>,
  ExpectTrue<Equal<StringCapitalize<'d'>, 'D'>>,
  ExpectTrue<Equal<StringCapitalize<'e'>, 'E'>>,
  ExpectTrue<Equal<StringCapitalize<'f'>, 'F'>>,
  ExpectTrue<Equal<StringCapitalize<'g'>, 'G'>>,
  ExpectTrue<Equal<StringCapitalize<'h'>, 'H'>>,
  ExpectTrue<Equal<StringCapitalize<'i'>, 'I'>>,
  ExpectTrue<Equal<StringCapitalize<'j'>, 'J'>>,
  ExpectTrue<Equal<StringCapitalize<'k'>, 'K'>>,
  ExpectTrue<Equal<StringCapitalize<'l'>, 'L'>>,
  ExpectTrue<Equal<StringCapitalize<'m'>, 'M'>>,
  ExpectTrue<Equal<StringCapitalize<'n'>, 'N'>>,
  ExpectTrue<Equal<StringCapitalize<'o'>, 'O'>>,
  ExpectTrue<Equal<StringCapitalize<'p'>, 'P'>>,
  ExpectTrue<Equal<StringCapitalize<'q'>, 'Q'>>,
  ExpectTrue<Equal<StringCapitalize<'r'>, 'R'>>,
  ExpectTrue<Equal<StringCapitalize<'s'>, 'S'>>,
  ExpectTrue<Equal<StringCapitalize<'t'>, 'T'>>,
  ExpectTrue<Equal<StringCapitalize<'u'>, 'U'>>,
  ExpectTrue<Equal<StringCapitalize<'v'>, 'V'>>,
  ExpectTrue<Equal<StringCapitalize<'w'>, 'W'>>,
  ExpectTrue<Equal<StringCapitalize<'x'>, 'X'>>,
  ExpectTrue<Equal<StringCapitalize<'y'>, 'Y'>>,
  ExpectTrue<Equal<StringCapitalize<'z'>, 'Z'>>,
]