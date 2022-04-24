import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyReadonly} from './MyReadonly'

type Todo = {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

export type cases = [
  ExpectTrue<
    Equal<
      MyReadonly<Todo>,
      {
        readonly title: string
        readonly description: string
        readonly completed: boolean
        readonly meta: {author: string}
      }
    >
  >,
  ExpectTrue<
    Equal<
      MyReadonly<Todo, 'completed'>,
      {
        title: string
        description: string
        readonly completed: boolean
        meta: {author: string}
      }
    >
  >,
]
