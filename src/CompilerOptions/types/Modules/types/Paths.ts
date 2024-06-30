/**
 * Specify a set of entries that re-map imports to additional lookup
 * locations.
 *
 * @see https://www.typescriptlang.org/tsconfig#paths
 */
export type Paths = Record<string, null | Array<null | string>>

export default Paths
