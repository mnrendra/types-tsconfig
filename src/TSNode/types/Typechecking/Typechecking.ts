/**
 * @see https://typestrong.org/ts-node/docs/options/#typechecking
 */
export interface Typechecking {
  /**
   * Use TypeScript's compiler host API instead of the language service API.
   *
   * @see https://typestrong.org/ts-node/docs/options/#compilerhost
   */
  compilerHost?: null | boolean

  /**
   * Load "files" and "include" from `tsconfig.json` on startup.
   *
   * Default is to override `tsconfig.json` "files" and "include" to only
   * include the entrypoint script.
   *
   * @see https://typestrong.org/ts-node/docs/options/#files
   */
  files?: null | boolean

  /**
   * Ignore TypeScript warnings by diagnostic code.
   *
   * @see https://typestrong.org/ts-node/docs/options/#ignorediagnostics
   */
  ignoreDiagnostics?: null | Array<string | number>

  /**
   * Use TypeScript's faster `transpileModule`.
   *
   * @see https://typestrong.org/ts-node/docs/options/#transpileonly
   */
  transpileOnly?: null | boolean

  /**
   * @deprecated Specify type-check is enabled (e.g. `transpileOnly == false`).
   *
   * @see https://typestrong.org/ts-node/docs/options/#typecheck
   */
  typeCheck?: null | boolean
}

export default Typechecking
