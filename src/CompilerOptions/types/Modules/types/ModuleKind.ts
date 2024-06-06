import type { server } from 'typescript'

type BaseModuleKind =
| `${server.protocol.ModuleKind}`
| 'ES2020'
| 'ES2022'

/**
 * Specify what module code is generated.
 *
 * @see https://www.typescriptlang.org/tsconfig#module
 */
export type ModuleKind =
| BaseModuleKind
| Lowercase<BaseModuleKind>

export default ModuleKind
