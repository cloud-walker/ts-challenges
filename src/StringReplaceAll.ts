export type StringReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${StringReplaceAll<R, From, To>}`
  : S
