/**
 * @see https://www.typescriptlang.org/tsconfig/#Compiler_Diagnostics_6251
 */
export interface CompilerDiagnostics {
  /**
   * Output compiler performance information after building.
   *
   * @deprecated Use `extendedDiagnostics` instead.
   *
   * @see https://www.typescriptlang.org/tsconfig#diagnostics
   */
  diagnostics?: null | boolean

  /**
   * Print names of files which TypeScript sees as a part of your project and
   * the reason they are part of the compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#explainFiles
   */
  explainFiles?: null | boolean

  /**
   * Output more detailed compiler performance information after building.
   *
   * @see https://www.typescriptlang.org/tsconfig#extendedDiagnostics
   */
  extendedDiagnostics?: null | boolean

  /**
   * Emit a v8 CPU profile of the compiler run for debugging.
   *
   * @see https://www.typescriptlang.org/tsconfig#generateCpuProfile
   */
  generateCpuProfile?: null | string

  /**
   * Print the names of emitted files after a compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#listEmittedFiles
   */
  listEmittedFiles?: null | boolean

  /**
   * Print all of the files read during the compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#listFiles
   */
  listFiles?: null | boolean

  /**
   * Enable tracing of the name resolution process. Requires TypeScript version
   * 2.0 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig#traceResolution
   */
  traceResolution?: null | boolean
}

export default CompilerDiagnostics
