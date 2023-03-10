/** @noSelfInFile */
declare const _HOST: string;
declare var _CC_DEFAULT_SETTINGS: string;
declare function sleep(time: number): void;
declare function write(text: string): number;
declare function print(text: string): number;
declare function printError(...args: any[]): void;
declare function read(
  replaceChar?: string,
  history?: string[],
  completeFn?: (partial: string) => string[] | undefined,
  _default?: string
): string;
