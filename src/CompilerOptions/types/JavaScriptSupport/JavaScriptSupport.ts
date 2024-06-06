/**
 * @see https://www.typescriptlang.org/tsconfig/#JavaScript_Support_6247
 */
export interface JavaScriptSupport {
  /**
   * Allow JavaScript files to be a part of your program. Use the `checkJS`
   * option to get errors from these files.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowJs
   */
  allowJs?: null | boolean

  /**
   * Enable error reporting in type-checked JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#checkJs
   */
  checkJs?: null | boolean

  /**
   * Specify the maximum folder depth used for checking JavaScript files from
   * `node_modules`. Only applicable with `allowJs`.
   *
   * @see https://www.typescriptlang.org/tsconfig#maxNodeModuleJsDepth
   */
  maxNodeModuleJsDepth?: null | number
}

export default JavaScriptSupport
