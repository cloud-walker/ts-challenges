type Space = ' ' | '\n' | '\t'

export type StringTrimLeft<S extends string> = S extends `${Space}${infer Rest}`
  ? StringTrimLeft<Rest>
  : S
