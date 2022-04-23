export type If<Condition extends boolean, A, B> = Condition extends true ? A : B
