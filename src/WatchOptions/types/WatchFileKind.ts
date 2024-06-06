import type { server } from 'typescript'
import type { CamelCase } from '@mnrendra/types-camelcase'

type BaseWatchFileKind = `${server.protocol.WatchFileKind}`

export type WatchFileKind =
| Lowercase<BaseWatchFileKind>
| CamelCase<BaseWatchFileKind>

export default WatchFileKind
