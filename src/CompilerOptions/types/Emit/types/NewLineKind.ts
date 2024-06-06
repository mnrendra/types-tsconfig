import type { server } from 'typescript'

type BaseNewLineKind = `${server.protocol.NewLineKind}`

/**
 * Set the newline character for emitting files.
 *
 * @see https://www.typescriptlang.org/tsconfig#newLine
 */
export type NewLineKind =
| Uppercase<BaseNewLineKind>
| Lowercase<BaseNewLineKind>

export default NewLineKind
