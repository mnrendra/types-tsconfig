/**
 *
 */
export interface BuildOptionss {
  /**
   * ~
   */
  dry?: null | boolean

  /**
   * Build all projects, including those that appear to be up to date.
   */
  force?: null | boolean

  /**
   * Enable verbose logging.
   */
  verbose?: null | boolean

  /**
   * Save `.tsbuildinfo` files to allow for incremental compilation of projects.
   *
   * @see https://www.typescriptlang.org/tsconfig#incremental
   */
  incremental?: null | boolean

  /**
   * Have recompiles in projects that use `incremental` and `watch` mode assume
   * that changes within a file will only affect files directly depending on it.
   *
   * @see https://www.typescriptlang.org/tsconfig#assumeChangesOnlyAffectDirectDependencies
   */
  assumeChangesOnlyAffectDirectDependencies?: null | boolean

  /**
   * Log paths used during the `moduleResolution` process.
   *
   * @see https://www.typescriptlang.org/tsconfig#traceResolution
   */
  traceResolution?: null | boolean
}

export default BuildOptionss
