import {Equal} from './Equal'
import {ExpectTrue} from './Expect'
import {MyOmit} from './MyOmit'

type Todo = {
  title: string
  description: string
  completed: boolean
}

export type cases = [
  // @ts-expect-error
  MyOmit<Todo, 'description' | 'invalid'>,

  ExpectTrue<
    Equal<
      MyOmit<Todo, 'description'>,
      {
        title: string
        completed: boolean
      }
    >
  >,
  ExpectTrue<
    Equal<
      MyOmit<Todo, 'description' | 'completed'>,
      {
        title: string
      }
    >
  >,
]
