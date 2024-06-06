/**
 * @see https://typestrong.org/ts-node/docs/options/#transpilation-options
 */
export interface TranspilationOptions {
  /**
   * Specify a custom TypeScript compiler.
   *
   * @see https://typestrong.org/ts-node/docs/options/#compiler
   */
  compiler?: null | string

  /**
   * Paths which should not be compiled.
   *
   * Each string in the array is converted to a regular expression via `new
   * RegExp()` and tested against source paths prior to compilation.
   *
   * Source paths are normalized to posix-style separators, relative to the
   * directory containing `tsconfig.json` or to cwd if no `tsconfig.json` is
   * loaded.
   *
   * Default is to ignore all node_modules subdirectories.
   *
   * @see https://typestrong.org/ts-node/docs/options/#ignore
   */
  ignore?: null | Array<null | string>

  /**
   * Re-order file extensions so that TypeScript imports are preferred.
   *
   * For example, when both `index.js` and `index.ts` exist, enabling this
   * option causes `require('./index')` to resolve to `index.ts` instead of
   * `index.js`
   *
   * @see https://typestrong.org/ts-node/docs/options/#prefertsexts
   */
  preferTsExts?: null | boolean

  /**
   * Skip ignore check, so that compilation will be attempted for all files with
   * matching extensions.
   *
   * @see https://typestrong.org/ts-node/docs/options/#skipignore
   */
  skipIgnore?: null | boolean

  /**
   * Transpile with swc instead of the TypeScript compiler, and skip
   * typechecking.
   *
   * Equivalent to setting both `transpileOnly: true` and `transpiler:
   * 'ts-node/transpilers/swc'`
   *
   * For complete instructions: https://typestrong.org/ts-node/docs/transpilers
   *
   * @see https://typestrong.org/ts-node/docs/options/#swc
   */
  swc?: null | boolean

  /**
   * Specify a custom transpiler for use with transpileOnly.
   *
   * @see https://typestrong.org/ts-node/docs/options/#transpiler
   */
  transpiler?: null | string | [any, any]
}

export default TranspilationOptions
