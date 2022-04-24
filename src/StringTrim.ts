type Space = ' ' | '\n' | '\t'

export type StringTrim<S extends string> = S extends
  | `${Space}${infer Rest}`
  | `${infer Rest}${Space}`
  ? StringTrim<Rest>
  : S
