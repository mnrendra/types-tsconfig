import type { ImportsNotUsedAsValues } from 'typescript'

type BaseImportsNotUsedAsValues = keyof typeof ImportsNotUsedAsValues

/**
 * Specify emit/checking behavior for imports that are only used for types.
 *
 * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
 */
export type ImportsNotUsedAsValuesKind = Lowercase<BaseImportsNotUsedAsValues>

export default ImportsNotUsedAsValuesKind
