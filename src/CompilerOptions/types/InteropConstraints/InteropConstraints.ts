/**
 * @see https://www.typescriptlang.org/tsconfig/#Interop_Constraints_6252
 */
export interface InteropConstraints {
  /**
   * Allow 'import x from y' when a module doesn't have a default export.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
   */
  allowSyntheticDefaultImports?: null | boolean

  /**
   * Emit additional JavaScript to ease support for importing CommonJS modules.
   * This enables `allowSyntheticDefaultImports` for type compatibility.
   *
   * @see https://www.typescriptlang.org/tsconfig#esModuleInterop
   */
  esModuleInterop?: null | boolean

  /**
   * Ensure that casing is correct in imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames
   */
  forceConsistentCasingInFileNames?: null | boolean

  /**
   * Ensure that each file can be safely transpiled without relying on other
   * imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#isolatedModules
   */
  isolatedModules?: null | boolean

  /**
   * Disable resolving symlinks to their realpath. This correlates to the same
   * flag in node.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveSymlinks
   */
  preserveSymlinks?: null | boolean

  /**
   * Do not transform or elide any imports or exports not marked as type-only,
   * ensuring they are written in the output file's format based on the 'module'
   * setting.
   *
   * @see https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax
   */
  verbatimModuleSyntax?: null | boolean
}

export default InteropConstraints
