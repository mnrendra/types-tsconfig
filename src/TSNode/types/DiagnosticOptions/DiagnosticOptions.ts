/**
 * @see https://typestrong.org/ts-node/docs/options/#diagnostic-options
 */
export interface DiagnosticOptions {
  /**
   * Logs TypeScript errors to stderr instead of throwing exceptions.
   *
   * @see https://typestrong.org/ts-node/docs/options/#logerror
   */
  logError?: null | boolean

  /**
   * Use pretty diagnostic formatter.
   *
   * @see https://typestrong.org/ts-node/docs/options/#pretty
   */
  pretty?: null | boolean
}

export default DiagnosticOptions
