import type { server } from 'typescript'
import type { CamelCase } from '../../utils'

type BaseFallbackPollingKind = `${server.protocol.PollingWatchKind}`

export type FallbackPollingKind =
| Lowercase<BaseFallbackPollingKind>
| CamelCase<BaseFallbackPollingKind>

export default FallbackPollingKind
