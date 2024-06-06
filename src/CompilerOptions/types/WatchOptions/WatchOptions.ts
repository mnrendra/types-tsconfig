/**
 * @see https://www.typescriptlang.org/tsconfig/#Watch_and_Build_Modes_6250
 */
export interface WatchOptions {
  /**
   * Have recompiles in '--incremental' and '--watch' assume that changes within
   * a file will only affect files directly depending on it. Requires TypeScript
   * version 3.8 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig#assumeChangesOnlyAffectDirectDependencies
   */
  assumeChangesOnlyAffectDirectDependencies?: null | boolean
}

export default WatchOptions
