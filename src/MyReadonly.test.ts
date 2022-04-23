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

export type cases = [ExpectTrue<Equal<MyReadonly<Todo>, Readonly<Todo>>>]
