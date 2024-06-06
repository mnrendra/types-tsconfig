import type { ModuleDetectionKind as EnumModuleDetectionKind } from 'typescript'

type BaseModuleDetectionKind = keyof typeof EnumModuleDetectionKind

/**
 * Control what method is used to detect module-format JS files.
 *
 * Specify how TypeScript determine a file as module.
 *
 * @see https://www.typescriptlang.org/tsconfig#moduleDetection
 */
export type ModuleDetectionKind = Lowercase<BaseModuleDetectionKind>

export default ModuleDetectionKind
