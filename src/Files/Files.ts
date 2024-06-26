/**
 * If no 'files' or 'include' property is present in a tsconfig.json, the
 * compiler defaults to including all files in the containing directory and
 * subdirectories except those specified by 'exclude'. When a 'files' property
 * is specified, only those files and those specified by 'include' are
 * included.
 *
 * @see https://www.typescriptlang.org/tsconfig#files
 */
export type Files = false | string | Array<null | string>

export default Files
