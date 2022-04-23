import {ExpectFalse, ExpectTrue} from './Expect'

export type cases = [
  ExpectTrue<true>,

  // @ts-expect-error
  ExpectTrue<false>,
  // @ts-expect-error
  ExpectTrue<'armadillo'>,

  ExpectFalse<false>,

  // @ts-expect-error
  ExpectFalse<true>,
  // @ts-expect-error
  ExpectFalse<'armadillo'>,
]
