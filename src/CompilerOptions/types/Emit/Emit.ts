import type {
  ImportsNotUsedAsValuesKind,
  NewLineKind
} from './types'

/**
 * @see https://www.typescriptlang.org/tsconfig/#Emit_6246
 */
export interface Emit {
  /**
   * Generate .d.ts files from TypeScript and JavaScript files in your project.
   *
   * @see https://www.typescriptlang.org/tsconfig#declaration
   */
  declaration?: null | boolean

  /**
   * Specify the output directory for generated declaration files.
   *
   * @see https://www.typescriptlang.org/tsconfig#declarationDir
   */
  declarationDir?: null | string

  /**
   * Create sourcemaps for d.ts files.
   *
   * @see https://www.typescriptlang.org/tsconfig#declarationMap
   */
  declarationMap?: null | boolean

  /**
   * Emit more compliant, but verbose and less performant JavaScript for
   * iteration.
   *
   * @see https://www.typescriptlang.org/tsconfig#downlevelIteration
   */
  downlevelIteration?: null | boolean

  /**
   * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitBOM
   */
  emitBOM?: null | boolean

  /**
   * Only output d.ts files and not JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitDeclarationOnly
   */
  emitDeclarationOnly?: null | boolean

  /**
   * Allow importing helper functions from tslib once per project, instead of
   * including them per-file.
   *
   * @see https://www.typescriptlang.org/tsconfig#importHelpers
   */
  importHelpers?: null | boolean

  /**
   * Specify emit/checking behavior for imports that are only used for types.
   *
   * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
   */
  importsNotUsedAsValues?: ImportsNotUsedAsValuesKind

  /**
   * Include sourcemap files inside the emitted JavaScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#inlineSourceMap
   */
  inlineSourceMap?: null | boolean

  /**
   * Include source code in the sourcemaps inside the emitted JavaScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#inlineSources
   */
  inlineSources?: null | boolean

  /**
   * Specify the location where debugger should locate map files instead of
   * generated locations.
   *
   * @see https://www.typescriptlang.org/tsconfig#mapRoot
   */
  mapRoot?: null | string

  /**
   * Set the newline character for emitting files.
   *
   * @see https://www.typescriptlang.org/tsconfig#newLine
   */
  newLine?: null | NewLineKind

  /**
   * Disable emitting file from a compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmit
   */
  noEmit?: null | boolean

  /**
   * Disable generating custom helper functions like `__extends` in compiled
   * output.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmitHelpers
   */
  noEmitHelpers?: null | boolean

  /**
   * Disable emitting files if any type checking errors are reported.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmitOnError
   */
  noEmitOnError?: null | boolean

  /**
   * Specify an output folder for all emitted files.
   *
   * @see https://www.typescriptlang.org/tsconfig#outDir
   */
  outDir?: null | string

  /**
   * Specify a file that bundles all outputs into one JavaScript file. If
   * `declaration` is true, also designates a file that bundles all .d.ts
   * output.
   *
   * @see https://www.typescriptlang.org/tsconfig#outFile
   */
  outFile?: null | string

  /**
   * Disable erasing `const enum` declarations in generated code.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveConstEnums
   */
  preserveConstEnums?: null | boolean

  /**
   * Preserve unused imported values in the JavaScript output that would
   * otherwise be removed.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveValueImports
   */
  preserveValueImports?: null | boolean

  /**
   * Disable emitting comments.
   *
   * @see https://www.typescriptlang.org/tsconfig#removeComments
   */
  removeComments?: null | boolean

  /**
   * Create source map files for emitted JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#sourceMap
   */
  sourceMap?: null | boolean

  /**
   * Specify the root path for debuggers to find the reference source code.
   *
   * @see https://www.typescriptlang.org/tsconfig#sourceRoot
   */
  sourceRoot?: null | string

  /**
   * Disable emitting declarations that have `@internal` in their JSDoc
   * comments.
   *
   * @see https://www.typescriptlang.org/tsconfig#stripInternal
   */
  stripInternal?: null | boolean
}

export default Emit
