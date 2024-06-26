/**
 * Specifies a list of glob patterns that match files to be included in
 * compilation. If no 'files' or 'include' property is present in a
 * tsconfig.json, the compiler defaults to including all files in the
 * containing directory and subdirectories except those specified by
 * 'exclude'. Requires TypeScript version 2.0 or later.
 *
 * @see https://www.typescriptlang.org/tsconfig#include
 */
export type Include = false | string | Array<null | string>

export default Include
