import type {
  ModuleKind,
  ModuleResolutionKind
} from './types'

/**
 * @see https://www.typescriptlang.org/tsconfig/#Modules_6244
 */
export interface Modules {
  /**
   * Enable importing files with any extension, provided a declaration file is
   * present.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowArbitraryExtensions
   */
  allowArbitraryExtensions?: null | boolean

  /**
   * Allow imports to include TypeScript file extensions. Requires
   * '--moduleResolution bundler' and either '--noEmit' or
   * '--emitDeclarationOnly' to be set.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions
   */
  allowImportingTsExtensions?: null | boolean

  /**
   * Allow accessing UMD globals from modules.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUmdGlobalAccess
   */
  allowUmdGlobalAccess?: null | boolean

  /**
   * Specify the base directory to resolve non-relative module names.
   *
   * @see https://www.typescriptlang.org/tsconfig#baseUrl
   */
  baseUrl?: null | string

  /**
   * Conditions to set in addition to the resolver-specific defaults when
   * resolving imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#customConditions
   */
  customConditions?: null | Array<null | string>

  /**
   * Specify what module code is generated.
   *
   * @see https://www.typescriptlang.org/tsconfig#module
   */
  module?: null | ModuleKind

  /**
   * Specify how TypeScript looks up a file from a given module specifier.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleResolution
   */
  moduleResolution?: null | ModuleResolutionKind

  /**
   * Provides a way to override the default list of file name suffixes to search
   * when resolving a module.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleSuffixes
   */
  moduleSuffixes?: null | string[]

  /**
   * Disallow `import`s, `require`s or `<reference>`s from expanding the number
   * of files TypeScript should add to a project.
   *
   * @see https://www.typescriptlang.org/tsconfig#noResolve
   */
  noResolve?: null | boolean

  /**
   * Specify a set of entries that re-map imports to additional lookup
   * locations.
   *
   * @see https://www.typescriptlang.org/tsconfig#paths
   */
  paths?: null | Record<string, null | Array<null | string>>

  /**
   * Enable importing .json files.
   *
   * @see https://www.typescriptlang.org/tsconfig#resolveJsonModule
   */
  resolveJsonModule?: null | boolean

  /**
   * Use the package.json 'exports' field when resolving package imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#resolvePackageJsonExports
   */
  resolvePackageJsonExports?: null | boolean

  /**
   * Use the package.json 'imports' field when resolving imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#resolvePackageJsonImports
   */
  resolvePackageJsonImports?: null | boolean

  /**
   * Specify the root folder within your source files.
   *
   * @see https://www.typescriptlang.org/tsconfig#rootDir
   */
  rootDir?: null | string

  /**
   * Allow multiple folders to be treated as one when resolving modules.
   *
   * @see https://www.typescriptlang.org/tsconfig#rootDirs
   */
  rootDirs?: null | Array<null | string>

  /**
   * Paths used to compute primary types search locations.
   *
   * Specify multiple folders that act like `./node_modules/@types`.
   *
   * @see https://www.typescriptlang.org/tsconfig#typeRoots
   */
  typeRoots?: null | Array<null | string>

  /**
   * Specify type package names to be included without being referenced in a
   * source file.
   *
   * @see https://www.typescriptlang.org/tsconfig#types
   */
  types?: null | Array<null | string>
}

export default Modules
