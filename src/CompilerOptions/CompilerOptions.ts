import type {
  BackwardsCompatibility,
  CommandLine,
  CompilerDiagnostics,
  Completeness,
  EditorSupport,
  Emit,
  InteropConstraints,
  JavaScriptSupport,
  LanguageAndEnvironment,
  Modules,
  OutputFormatting,
  Projects,
  TypeAcquisition,
  TypeChecking,
  WatchOptions
} from './types'

/**
 * Instructs the TypeScript compiler how to compile .ts files.
 *
 * @see https://www.typescriptlang.org/tsconfig
 */
export interface CompilerOptions extends
  BackwardsCompatibility,
  CommandLine,
  CompilerDiagnostics,
  Completeness,
  EditorSupport,
  Emit,
  InteropConstraints,
  JavaScriptSupport,
  LanguageAndEnvironment,
  Modules,
  OutputFormatting,
  Projects,
  TypeAcquisition,
  TypeChecking,
  WatchOptions {}

export default CompilerOptions
