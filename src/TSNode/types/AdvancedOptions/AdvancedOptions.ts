/**
 * @see https://typestrong.org/ts-node/docs/options/#advanced-options
 */
export interface AdvancedOptions {
  /**
   * Emit output files into `.ts-node` directory.
   *
   * @see https://typestrong.org/ts-node/docs/options/#emit
   */
  emit?: null | boolean

  /**
   * Allows the usage of top level await in REPL.
   *
   * Uses node's implementation which accomplishes this with an AST syntax
   * transformation.
   *
   * Enabled by default when tsconfig target is es2018 or above. Set to false to
   * disable.
   *
   * **Note**: setting to `true` when tsconfig target is too low will throw an
   * Error. Leave as `undefined` to get default, automatic behavior.
   *
   * @see https://typestrong.org/ts-node/docs/options/#noexperimentalreplawait
   */
  experimentalReplAwait?: null | boolean

  /**
   * Enable experimental features that re-map imports and require calls to
   * support:
   *
   * `baseUrl`, `paths`, `rootDirs`, `.js` to `.ts` file extension mappings,
   *
   * `outDir` to `rootDir` mappings for composite projects and monorepos.
   *
   * For details, see https://github.com/TypeStrong/ts-node/issues/1514
   *
   * @see https://typestrong.org/ts-node/docs/options/#experimentalresolver
   */
  experimentalResolver?: null | boolean

  /**
   * Like node's `--experimental-specifier-resolution`, but can also be set in
   * your `tsconfig.json` for convenience.
   *
   * For details, see https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#customizing-esm-specifier-resolution-algorithm
   *
   * @see https://typestrong.org/ts-node/docs/options/#experimentalspecifierresolution
   */
  experimentalSpecifierResolution?: 'explicit' | 'node'

  /**
   * Override certain paths to be compiled and executed as CommonJS or
   * ECMAScript modules.
   *
   * When overridden, the tsconfig "module" and package.json "type" fields are
   * overridden, and the file extension is ignored.
   *
   * This is useful if you cannot use .mts, .cts, .mjs, or .cjs file extensions;
   *
   * it achieves the same effect.
   *
   * Each key is a glob pattern following the same rules as tsconfig's "include"
   * array.
   *
   * When multiple patterns match the same file, the last pattern takes
   * precedence.
   *
   * `cjs` overrides matches files to compile and execute as CommonJS.
   *
   * `esm` overrides matches files to compile and execute as native ECMAScript
   * modules.
   *
   * `package` overrides either of the above to default behavior, which obeys
   * package.json "type" and tsconfig.json "module" options.
   *
   * @see https://typestrong.org/ts-node/docs/options/#moduletypes
   */
  moduleTypes?: null | Record<string, any>

  /**
   * Modules to require, like node's `--require` flag.
   *
   * If specified in `tsconfig.json`, the modules will be resolved relative to
   * the `tsconfig.json` file.
   *
   * If specified programmatically, each input string should be pre-resolved to
   * an absolute path for best results.
   *
   * @see https://typestrong.org/ts-node/docs/options/#require
   */
  require?: null | Array<null | string>

  /**
   * Scope compiler to files within `scopeDir`.
   *
   * @see https://typestrong.org/ts-node/docs/options/#scope
   */
  scope?: null | boolean

  /**
   * Directory within which compiler is limited when `scope` is enabled.
   *
   * @see https://typestrong.org/ts-node/docs/options/#scopedir
   */
  scopeDir?: null | string
}

export default AdvancedOptions
