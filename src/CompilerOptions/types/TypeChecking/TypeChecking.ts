/**
 * @see https://www.typescriptlang.org/tsconfig/#Type_Checking_6248
 */
export interface TypeChecking {
  /**
   * Disable error reporting for unreachable code.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnreachableCode
   */
  allowUnreachableCode?: null | boolean

  /**
   * Disable error reporting for unused labels.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnusedLabels
   */
  allowUnusedLabels?: null | boolean

  /**
   * Ensure 'use strict' is always emitted.
   *
   * @see https://www.typescriptlang.org/tsconfig#alwaysStrict
   */
  alwaysStrict?: null | boolean

  /**
   * Interpret optional property types as written, rather than adding
   * 'undefined'.
   *
   * Differentiate between undefined and not present when type checking.
   *
   * @see https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes
   */
  exactOptionalPropertyTypes?: null | boolean

  /**
   * Enable error reporting for fallthrough cases in switch statements.
   *
   * @see https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch
   */
  noFallthroughCasesInSwitch?: null | boolean

  /**
   * Enable error reporting for expressions and declarations with an implied
   * `any` type.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitAny
   */
  noImplicitAny?: null | boolean

  /**
   * Ensure overriding members in derived classes are marked with an override
   * modifier.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitOverride
   */
  noImplicitOverride?: null | boolean

  /**
   * Enable error reporting for codepaths that do not explicitly return in a
   * function.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitReturns
   */
  noImplicitReturns?: null | boolean

  /**
   * Enable error reporting when `this` is given the type `any`.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitThis
   */
  noImplicitThis?: null | boolean

  /**
   * Enforces using indexed accessors for keys declared using an indexed type.
   *
   * @see https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature
   */
  noPropertyAccessFromIndexSignature?: null | boolean

  /**
   * Add `undefined` to a type when accessed using an index.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
   */
  noUncheckedIndexedAccess?: null | boolean

  /**
   * Enable error reporting when a local variables aren't read.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUnusedLocals
   */
  noUnusedLocals?: null | boolean

  /**
   * Raise an error when a function parameter isn't read.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUnusedParameters
   */
  noUnusedParameters?: null | boolean

  /**
   * Enable all strict type checking options.
   *
   * @see https://www.typescriptlang.org/tsconfig#strict
   */
  strict?: null | boolean

  /**
   * Check that the arguments for `bind`, `call`, and `apply` methods match the
   * original function.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictBindCallApply
   */
  strictBindCallApply?: null | boolean

  /**
   * When assigning functions, check to ensure parameters and the return values
   * are subtype-compatible.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictFunctionTypes
   */
  strictFunctionTypes?: null | boolean

  /**
   * When type checking, take into account `null` and `undefined`.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictNullChecks
   */
  strictNullChecks?: null | boolean

  /**
   * Check for class properties that are declared but not set in the
   * constructor.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictPropertyInitialization
   */
  strictPropertyInitialization?: null | boolean

  /**
   * Default catch clause variables as `unknown` instead of `any`.
   *
   * @see https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables
   */
  useUnknownInCatchVariables?: null | boolean
}

export default TypeChecking
