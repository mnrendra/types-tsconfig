/**
 * @see https://www.typescriptlang.org/tsconfig/#Projects_6255
 */
export interface Projects {
  /**
   * Enable constraints that allow a TypeScript project to be used with project
   * references.
   *
   * @see https://www.typescriptlang.org/tsconfig#composite
   */
  composite?: null | boolean

  /**
   * Reduce the number of projects loaded automatically by TypeScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableReferencedProjectLoad
   */
  disableReferencedProjectLoad?: null | boolean

  /**
   * Opt a project out of multi-project reference checking when editing.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSolutionSearching
   */
  disableSolutionSearching?: null | boolean

  /**
   * Disable preferring source files instead of declaration files when
   * referencing composite projects.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSourceOfProjectReferenceRedirect
   */
  disableSourceOfProjectReferenceRedirect?: null | boolean

  /**
   * Save `.tsbuildinfo` files to allow for incremental compilation of projects.
   *
   * Enable incremental compilation. Requires TypeScript version 3.4 or later.
   *
   * @see https://www.typescriptlang.org/tsconfig#incremental
   */
  incremental?: null | boolean

  /**
   * Specify the path to `.tsbuildinfo` incremental compilation file.
   *
   * Specify the folder for `.tsbuildinfo` incremental compilation files.
   *
   * @see https://www.typescriptlang.org/tsconfig#tsBuildInfoFile
   */
  tsBuildInfoFile?: null | string
}

export default Projects
