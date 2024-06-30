# @mnrendra/types-tsconfig
`tsconfig.json` interface extended from the [official](https://www.typescriptlang.org/tsconfig/) and [unofficial](https://json.schemastore.org/tsconfig.json) fields.

## Install
```bash
npm i -D @mnrendra/types-tsconfig
```

## Usage
```typescript
import type { TSConfig } from '@mnrendra/types-tsconfig'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process'

import * as JSON5 from 'json5'

const { compilerOptions }: TSConfig = JSON5.parse(readFileSync(resolve(cwd(), 'tsconfig.json'), 'utf-8'))

console.log(compilerOptions)
```

## Types
```typescript
import type {
  TSConfig // `tsconfig.json` interface extended from the official and unofficial fields.
  // Interfaces
  BuildOptions,
  CompileOnSave,
  CompilerOptions,
  BaseURL,
  Paths,
  Exclude,
  Extends,
  Files,
  Include,
  MDX,
  References,
  TSNode,
  WatchOptions,
  TypeAcquisition
} from '@mnrendra/types-tsconfig'
```

## License
[MIT](https://github.com/mnrendra/types-tsconfig/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)