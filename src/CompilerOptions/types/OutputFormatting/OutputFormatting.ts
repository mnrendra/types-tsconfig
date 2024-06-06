/**
 * @see https://www.typescriptlang.org/tsconfig/#Output_Formatting_6256
 */
export interface OutputFormatting {
  /**
   * Disable truncating types in error messages.
   *
   * @see https://www.typescriptlang.org/tsconfig#noErrorTruncation
   */
  noErrorTruncation?: null | boolean

  /**
   * Disable wiping the console in watch mode.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveWatchOutput
   */
  preserveWatchOutput?: null | boolean

  /**
   * Enable color and formatting in output to make compiler errors easier to
   * read.
   *
   * @see https://www.typescriptlang.org/tsconfig#pretty
   */
  pretty?: null | boolean
}

export default OutputFormatting
