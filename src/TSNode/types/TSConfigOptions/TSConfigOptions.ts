import type CompilerOptions from '../../../CompilerOptions'

/**
 * @see https://typestrong.org/ts-node/docs/options/#tsconfig-options
 */
export interface TSConfigOptions {
  /**
   * JSON object to merge with TypeScript `compilerOptions`.
   *
   * Instructs the TypeScript compiler how to compile .ts files.
   *
   * @see https://www.typescriptlang.org/tsconfig
   */
  compilerOptions?: null | CompilerOptions
}

export default TSConfigOptions
