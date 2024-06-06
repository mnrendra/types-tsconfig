import type { server } from 'typescript'
import type { CamelCase } from '../../utils'

type BaseWatchDirectoryKind = `${server.protocol.WatchDirectoryKind}`

export type WatchDirectoryKind =
| Lowercase<BaseWatchDirectoryKind>
| CamelCase<BaseWatchDirectoryKind>

export default WatchDirectoryKind
