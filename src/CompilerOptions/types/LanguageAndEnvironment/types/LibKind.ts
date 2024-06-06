type HighLevelLibraries =
| 'ES5'
| 'ES2015'
| 'ES6'
| 'ES2016'
| 'ES7'
| 'ES2017'
| 'ES2018'
| 'ES2019'
| 'ES2020'
| 'ES2021'
| 'ES2022'
| 'ESNext'
| 'DOM'
| 'WebWorker'
| 'ScriptHost'

type IndividualLibraryComponents =
// DOM
| 'DOM.Iterable'
// ES2015
| 'ES2015.Core'
| 'ES2015.Collection'
| 'ES2015.Generator'
| 'ES2015.Iterable'
| 'ES2015.Promise'
| 'ES2015.Proxy'
| 'ES2015.Reflect'
| 'ES2015.Symbol'
| 'ES2015.Symbol.WellKnown'
// ES2016
| 'ES2016.Array.Include'
// ES2017
| 'ES2017.Object'
| 'ES2017.Intl'
| 'ES2017.SharedMemory'
| 'ES2017.String'
| 'ES2017.TypedArrays'
| 'ES2017.Date'
// ES2018
| 'ES2018.AsyncGenerator'
| 'ES2018.AsyncIterable'
| 'ES2018.Intl'
| 'ES2018.Promise'
| 'ES2018.RegExp'
// ES2019
| 'ES2019.Array'
| 'ES2019.Intl'
| 'ES2019.Object'
| 'ES2019.String'
| 'ES2019.Symbol'
// ES2020
| 'ES2020.BigInt'
| 'ES2020.Promise'
| 'ES2020.String'
| 'ES2020.Symbol.WellKnown'
| 'ES2020.SharedMemory'
| 'ES2020.Intl'
| 'ES2020.Date'
| 'ES2020.Number'
// ES2021
| 'ES2021.Promise'
| 'ES2021.String'
| 'ES2021.WeakRef'
| 'ES2021.Intl'
// ES2022
| 'ES2022.Array'
| 'ES2022.Error'
| 'ES2022.Intl'
| 'ES2022.Object'
| 'ES2022.String'
| 'ES2022.SharedMemory'
| 'ES2022.RegExp'
// ES2023
| 'ES2023'
| 'ES2023.Array'
| 'ES2023.Collection'
// ESNext
| 'ESNext.AsyncIterable'
| 'ESNext.Array'
| 'ESNext.BigInt'
| 'ESNext.Intl'
| 'ESNext.Promise'
| 'ESNext.String'
| 'ESNext.Symbol'
| 'ESNext.WeakRef'
| 'ESNext.Decorators'
| 'ESNext.Disposable'
// WebWorker
| 'WebWorker.ImportScripts'
| 'Webworker.Iterable'
// Decorators
| 'Decorators'
| 'Decorators.Legacy'

/**
 * Specify a set of bundled library declaration files that describe the target
 * runtime environment.
 *
 * @see https://www.typescriptlang.org/tsconfig#lib
 */
export type LibKind = Array<
| null
| HighLevelLibraries
| IndividualLibraryComponents
>

export default LibKind
