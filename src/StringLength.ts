export type StringLength<
  Value extends string,
  List extends string[] = [],
> = Value extends `${infer Left}${infer Right}`
  ? StringLength<Right, [...List, Left]>
  : List['length']
