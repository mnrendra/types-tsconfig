import type {
  JSXKind,
  LibKind,
  ModuleDetectionKind,
  TargetKind
} from './types'

/**
 * @see https://www.typescriptlang.org/tsconfig/#Language_and_Environment_6254
 */
export interface LanguageAndEnvironment {
  /**
   * Emit design-type metadata for decorated declarations in source files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata
   */
  emitDecoratorMetadata?: null | boolean

  /**
   * Enable experimental support for legacy experimental decorators.
   *
   * Enable experimental support for TC39 stage 2 draft decorators.
   *
   * @see https://www.typescriptlang.org/tsconfig#experimentalDecorators
   */
  experimentalDecorators?: null | boolean

  /**
   * Specify what JSX code is generated.
   *
   * @see https://www.typescriptlang.org/tsconfig#jsx
   */
  jsx?: JSXKind

  /**
   * Specify the JSX factory function used when targeting React JSX emit, e.g.
   * 'React.createElement' or 'h'
   *
   * @see https://www.typescriptlang.org/tsconfig#jsxFactory
   */
  jsxFactory?: null | string

  /**
   * Specify the JSX Fragment reference used for fragments when targeting React
   * JSX emit e.g. 'React.Fragment' or 'Fragment'.
   *
   * @see https://www.typescriptlang.org/tsconfig#jsxFragmentFactory
   */
  jsxFragmentFactory?: null | string

  /**
   * Specify module specifier used to import the JSX factory functions when
   * using `jsx: react-jsx`.
   *
   * @see https://www.typescriptlang.org/tsconfig#jsxImportSource
   */
  jsxImportSource?: null | string

  /**
   * Specify a set of bundled library declaration files that describe the target
   * runtime environment.
   *
   * @see https://www.typescriptlang.org/tsconfig#lib
   */
  lib?: null | LibKind

  /**
   * Control what method is used to detect module-format JS files.
   *
   * Specify how TypeScript determine a file as module.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleDetection
   */
  moduleDetection?: ModuleDetectionKind

  /**
   * Disable including any library files, including the default lib.d.ts.
   *
   * @see https://www.typescriptlang.org/tsconfig#noLib
   */
  noLib?: null | boolean

  /**
   * Specify the object invoked for `createElement`. This only applies when
   * targeting `react` JSX emit.
   *
   * @see https://www.typescriptlang.org/tsconfig#reactNamespace
   */
  reactNamespace?: null | string

  /**
   * Set the JavaScript language version for emitted JavaScript and include
   * compatible library declarations.
   *
   * @see https://www.typescriptlang.org/tsconfig#target
   */
  target?: null | TargetKind

  /**
   * Emit ECMAScript-standard-compliant class fields.
   *
   * @see https://www.typescriptlang.org/tsconfig#useDefineForClassFields
   */
  useDefineForClassFields?: null | boolean
}

export default LanguageAndEnvironment
