type LowerCaseFirstLetter<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? `${Lowercase<First>}${Rest}`
    : S

type CamelCase<T extends string> =
  T extends `${infer First}${infer Rest}`
    ? LowerCaseFirstLetter<`${Lowercase<First>}${Rest}`>
    : T

export default CamelCase
