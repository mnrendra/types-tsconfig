/**
 * @see https://www.typescriptlang.org/tsconfig/#Completeness_6257
 */
export interface Completeness {
  /**
   * Skip type checking .d.ts files that are included with TypeScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#skipDefaultLibCheck
   */
  skipDefaultLibCheck?: null | boolean

  /**
   * Skip type checking all .d.ts files.
   *
   * @see https://www.typescriptlang.org/tsconfig#skipLibCheck
   */
  skipLibCheck?: null | boolean
}

export default Completeness
