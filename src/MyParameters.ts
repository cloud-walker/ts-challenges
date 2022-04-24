export type MyParameters<T extends Function> = T extends (
  ...args: infer U
) => unknown
  ? U
  : never
