import type { server } from 'typescript'

type BaseTargetKind =
| `${server.protocol.ScriptTarget}`
| 'ES2023'

/**
 * Set the JavaScript language version for emitted JavaScript and include
 * compatible library declarations.
 *
 * @see https://www.typescriptlang.org/tsconfig#target
 */
export type TargetKind =
| BaseTargetKind
| Lowercase<BaseTargetKind>

export default TargetKind
