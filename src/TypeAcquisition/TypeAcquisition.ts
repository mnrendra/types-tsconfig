/**
 * Auto type (.d.ts) acquisition options for this project. Requires TypeScript
 * version 2.1 or later.
 *
 * @see https://www.typescriptlang.org/tsconfig/#type-acquisition
 */
export interface TypeAcquisition {
  /**
   * Enable auto type acquisition.
   *
   * @see https://www.typescriptlang.org/tsconfig#type-enable
   */
  enable?: null | boolean

  /**
   * Specifies a list of type declarations to be included in auto type
   * acquisition. Ex. ["jquery", "lodash"].
   *
   * @see https://www.typescriptlang.org/tsconfig#type-include
   */
  include?: null | Array<null | string>

  /**
   * Specifies a list of type declarations to be excluded from auto type
   * acquisition. Ex. ["jquery", "lodash"].
   *
   * @see https://www.typescriptlang.org/tsconfig#type-exclude
   */
  exclude?: null | Array<null | string>

  /**
   * TypeScript’s type acquisition can infer what types should be added based on
   * filenames in a project. This means that having a file like `jquery.js` in
   * your project would automatically download the types for JQuery from
   * DefinitelyTyped.
   *
   * @see https://www.typescriptlang.org/tsconfig#type-disableFilenameBasedTypeAcquisition
   */
  disableFilenameBasedTypeAcquisition?: boolean
}

export default TypeAcquisition
