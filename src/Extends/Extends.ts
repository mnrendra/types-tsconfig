/**
 * Path to base configuration file to inherit from (requires TypeScript
 * version 2.1 or later), or array of base files, with the rightmost files
 * having the greater priority (requires TypeScript version 5.0 or later).
 *
 * @see https://www.typescriptlang.org/tsconfig#extends
 */
export type Extends = false | string | Array<null | string>

export default Extends
