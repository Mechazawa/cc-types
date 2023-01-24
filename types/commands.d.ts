/** @noSelfInFile */
declare namespace commands {
  function exec(command: string): LuaMultiReturn<[boolean, string[], number?]>;
  function execAsync(command: string): number;
  function list(...subCommand: string[]): string[];
  function getBlockPosition(): LuaMultiReturn<[number, number, number]>;
  function getBlockInfos(
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number,
    dimension?: string
  ): LuaMap;
}
