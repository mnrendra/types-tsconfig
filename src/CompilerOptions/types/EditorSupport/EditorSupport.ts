/**
 * @see https://www.typescriptlang.org/tsconfig/#Editor_Support_6249
 */
export interface EditorSupport {
  /**
   * Remove the 20mb cap on total source code size for JavaScript files in the
   * TypeScript language server.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSizeLimit
   */
  disableSizeLimit?: null | boolean

  /**
   * Specify a list of language service plugins to include.
   *
   * @see https://www.typescriptlang.org/tsconfig#plugins
   */
  plugins?: null | Array<null | {
    /**
     * Plugin name.
     *
     * @see https://www.typescriptlang.org/tsconfig#plugins
     */
    name: null | string
  }>
}

export default EditorSupport
