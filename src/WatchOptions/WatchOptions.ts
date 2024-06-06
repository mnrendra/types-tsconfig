import type {
  WatchFileKind,
  WatchDirectoryKind,
  FallbackPollingKind
} from './types'

/**
 * Settings for the watch mode in TypeScript.
 *
 * @see https://www.typescriptlang.org/tsconfig/#watch-options
 */
export interface WatchOptions {
  /**
   * Specify how the TypeScript watch mode works.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-watchFile
   */
  watchFile?: null | WatchFileKind

  /**
   * Specify how directories are watched on systems that lack recursive
   * file-watching functionality.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-watchDirectory
   */
  watchDirectory?: null | WatchDirectoryKind

  /**
   * Specify what approach the watcher should use if the system runs out of
   * native file watchers.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-fallbackPolling
   */
  fallbackPolling?: null | FallbackPollingKind

  /**
   * Synchronously call callbacks and update the state of directory watchers on
   * platforms that don`t support recursive watching natively.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-synchronousWatchDirectory
   */
  synchronousWatchDirectory?: null | boolean

  /**
   * Remove a list of directories from the watch process.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-excludeDirectories
   */
  excludeDirectories?: null | Array<null | string>

  /**
   * Remove a list of files from the watch mode's processing.
   *
   * @see https://www.typescriptlang.org/tsconfig#watch-excludeFiles
   */
  excludeFiles?: null | Array<null | string>
}

export default WatchOptions
