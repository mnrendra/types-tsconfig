import type { server } from 'typescript'
import type { CamelCase } from '@mnrendra/types-camelcase'

type BaseWatchDirectoryKind = `${server.protocol.WatchDirectoryKind}`

export type WatchDirectoryKind =
| Lowercase<BaseWatchDirectoryKind>
| CamelCase<BaseWatchDirectoryKind>

export default WatchDirectoryKind
