/**
 * @see https://www.typescriptlang.org/tsconfig/#Backwards_Compatibility_6253
 */
export interface BackwardsCompatibility {
  /**
   * No longer supported. In early versions, manually set the text encoding for
   * reading files.
   *
   * @deprecated In prior versions of TypeScript, this controlled what encoding
   * was used when reading text files from disk. Today, TypeScript assumes UTF-8
   * encoding, but will correctly detect UTF-16 (BE and LE) or UTF-8 BOMs.
   *
   * @see https://www.typescriptlang.org/tsconfig#charset
   */
  charset?: null | string

  /**
   * Make keyof only return strings instead of string, numbers or symbols.
   * Legacy option.
   *
   * @deprecated Option 'keyofStringsOnly' is deprecated and will stop
   * functioning in TypeScript 5.5. Specify compilerOption
   * '"ignoreDeprecations": "5.0"' to silence this error.
   *
   * @see https://www.typescriptlang.org/tsconfig#keyofStringsOnly
   */
  keyofStringsOnly?: null | boolean

  /**
   * Disable adding 'use strict' directives in emitted JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitUseStrict
   */
  noImplicitUseStrict?: null | boolean

  /**
   * Disable strict checking of generic signatures in function types.
   *
   * @see https://www.typescriptlang.org/tsconfig#noStrictGenericChecks
   */
  noStrictGenericChecks?: null | boolean

  /**
   * @deprecated Use `outFile` instead.
   *
   * @see https://www.typescriptlang.org/tsconfig#out
   */
  out?: null | string

  /**
   * Disable reporting of excess property errors during the creation of object
   * literals.
   *
   * @see https://www.typescriptlang.org/tsconfig#suppressExcessPropertyErrors
   */
  suppressExcessPropertyErrors?: null | boolean

  /**
   * Suppress `noImplicitAny` errors when indexing objects that lack index
   * signatures.
   *
   * @see https://www.typescriptlang.org/tsconfig#suppressImplicitAnyIndexErrors
   */
  suppressImplicitAnyIndexErrors?: null | boolean
}

export default BackwardsCompatibility
