export type IfNever<T, L, R> = [T] extends [never] ? L : R
