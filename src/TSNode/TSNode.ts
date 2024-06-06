import type {
  AdvancedOptions,
  CLIOptions,
  DiagnosticOptions,
  TranspilationOptions,
  TSConfigOptions,
  Typechecking
} from './types'

export interface TSNode extends
  AdvancedOptions,
  CLIOptions,
  DiagnosticOptions,
  TranspilationOptions,
  TSConfigOptions,
  Typechecking {}

export default TSNode
