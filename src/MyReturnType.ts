export type MyReturnType<T extends (...args: readonly any[]) => unknown> =
  T extends (...args: readonly any[]) => infer U ? U : never
