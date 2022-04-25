export type FunctionAppendArg<Fn, Arg> = Fn extends (
  ...args: infer A
) => infer R
  ? (...args: [...A, Arg]) => R
  : never
