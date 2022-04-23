import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyPick} from './MyPick'

type Todo = {
  title: string
  description: string
  completed: boolean
}

export type cases = [
  ExpectTrue<Equal<{title: string}, MyPick<Todo, 'title'>>>,
  ExpectTrue<
    Equal<
      {title: string; completed: boolean},
      MyPick<Todo, 'title' | 'completed'>
    >
  >,

  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]
