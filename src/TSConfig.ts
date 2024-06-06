import type BuildOptions from './BuildOptions'
import type CompileOnSave from './CompileOnSave'
import type CompilerOptions from './CompilerOptions'
import type Exclude from './Exclude'
import type Extends from './Extends'
import type Files from './Files'
import type Include from './Include'
import type MDX from './MDX'
import type References from './References'
import type TSNode from './TSNode'
import type WatchOptions from './WatchOptions'
import type TypeAcquisition from './TypeAcquisition'

/**
 * JSON schema for the TypeScript compiler's configuration file.
 *
 * @see https://www.typescriptlang.org/tsconfig
 */
interface TSConfig {
  /**
   *
   */
  buildOptions?: null | BuildOptions

  /**
   * Enable Compile-on-Save for this project.
   */
  compileOnSave?: null | CompileOnSave

  /**
   * Instructs the TypeScript compiler how to compile .ts files.
   *
   * @see https://www.typescriptlang.org/tsconfig#compilerOptions
   */
  compilerOptions?: null | CompilerOptions

  /**
   * Specifies a list of files to be excluded from compilation. The 'exclude'
   * property only affects the files included via the 'include' property and not
   * the 'files' property. Glob patterns require TypeScript version 2.0 or
   * later.
   *
   * @see https://www.typescriptlang.org/tsconfig#exclude
   */
  exclude?: null | Exclude

  /**
   * Path to base configuration file to inherit from (requires TypeScript
   * version 2.1 or later), or array of base files, with the rightmost files
   * having the greater priority (requires TypeScript version 5.0 or later).
   *
   * @see https://www.typescriptlang.org/tsconfig#extends
   */
  extends?: null | Extends

  /**
   * If no 'files' or 'include' property is present in a tsconfig.json, the
   * compiler defaults to including all files in the containing directory and
   * subdirectories except those specified by 'exclude'. When a 'files' property
   * is specified, only those files and those specified by 'include' are
   * included.
   *
   * @see https://www.typescriptlang.org/tsconfig#files
   */
  files?: null | Files

  /**
   * Specifies a list of glob patterns that match files to be included in
   * compilation. If no 'files' or 'include' property is present in a
   * tsconfig.json, the compiler defaults to including all files in the
   * containing directory and subdirectories except those specified by
   * 'exclude'. Requires TypeScript version 2.0 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig#include
   */
  include?: null | Include

  /**
   * MDX language server options.
   */
  mdx?: MDX

  /**
   * Referenced projects. Requires TypeScript version 3.0 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig#references
   */
  references?: null | References

  /**
   * Offers TypeScript execution and REPL for node.js, with source map support.
   *
   * See also: https://typestrong.org/ts-node/docs/configuration
   *
   * @see https://typestrong.org/ts-node/docs/options/
   */
  'ts-node'?: null | TSNode

  /**
   * Settings for the watch mode in TypeScript.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-options
   */
  watchOptions?: null | WatchOptions

  /**
   * Auto type (.d.ts) acquisition options for this project. Requires TypeScript
   * version 2.1 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig/#type-acquisition
   */
  typeAcquisition?: null | TypeAcquisition
}

export default TSConfig
