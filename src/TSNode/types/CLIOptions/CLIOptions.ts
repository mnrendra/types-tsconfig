/**
 * @see https://typestrong.org/ts-node/docs/options/#cli-options
 */
export interface CLIOptions {
  /**
   * Enable native ESM support.
   *
   * For details, see https://typestrong.org/ts-node/docs/imports#native-ecmascript-modules
   *
   * @see https://typestrong.org/ts-node/docs/options/#esm
   */
  esm?: null | boolean
}

export default CLIOptions
