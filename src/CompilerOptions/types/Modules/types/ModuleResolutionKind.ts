import type { server } from 'typescript'

type BaseModuleResolutionKind = `${server.protocol.ModuleResolutionKind}`

/**
 * Specify how TypeScript looks up a file from a given module specifier.
 *
 * @see https://www.typescriptlang.org/tsconfig#moduleResolution
 */
export type ModuleResolutionKind =
| BaseModuleResolutionKind
| Lowercase<BaseModuleResolutionKind>

export default ModuleResolutionKind
