/** @noSelfInFile */
declare namespace turtle {
  interface TurtleItemStack {}

  function craft(count?: number): LuaMultiReturn<[boolean, string?]>;

  function forward(): LuaMultiReturn<[boolean, string?]>;
  function back(): LuaMultiReturn<[boolean, string?]>;
  function up(): LuaMultiReturn<[boolean, string?]>;
  function down(): LuaMultiReturn<[boolean, string?]>;
  function left(): LuaMultiReturn<[boolean, string?]>;
  function right(): LuaMultiReturn<[boolean, string?]>;

  function turnLeft(): LuaMultiReturn<[boolean, string?]>;
  function turnRight(): LuaMultiReturn<[boolean, string?]>;

  function dig(side?: string): LuaMultiReturn<[boolean, string?]>;
  function digUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  function digDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  function place(text?: string): LuaMultiReturn<[boolean, string?]>;
  function placeUp(text?: string): LuaMultiReturn<[boolean, string?]>;
  function placeDown(text?: string): LuaMultiReturn<[boolean, string?]>;

  function drop(count?: number): LuaMultiReturn<[boolean, string?]>;
  function dropUp(count?: number): LuaMultiReturn<[boolean, string?]>;
  function dropDown(count?: number): LuaMultiReturn<[boolean, string?]>;

  function select(slot: number): boolean;
  function getItemCount(slot?: number): number;
  function getItemSpace(slot?: number): number;

  function detect(): boolean;
  function detectUp(): boolean;
  function detectDown(): boolean;

  function compare(): boolean;
  function compareUp(): boolean;
  function compareDown(): boolean;

  function attack(side?: string): LuaMultiReturn<[boolean, string?]>;
  function attackUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  function attackDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  function suck(count?: number): LuaMultiReturn<[boolean, string?]>;
  function suckUp(count?: number): LuaMultiReturn<[boolean, string?]>;
  function suckDown(count?: number): LuaMultiReturn<[boolean, string?]>;

  function getFuelLevel(): number | string;
  function refuel(count?: number): LuaMultiReturn<[boolean, string?]>;

  function compareTo(slot: number): boolean;
  function transferTo(slot: number, count?: number): boolean;

  function getSelectedSlot(): number;
  function getFuelLimit(): number | string;

  function equipLeft(): LuaMultiReturn<[boolean, string?]>;
  function equipRight(): LuaMultiReturn<[boolean, string?]>;

  function inspect(): LuaMultiReturn<[boolean, string | LuaMap]>;
  function inspectUp(): LuaMultiReturn<[boolean, string | LuaMap]>;
  function inspectDown(): LuaMultiReturn<[boolean, string | LuaMap]>;

  function getItemDetail(slot?: number, detailed?: boolean): undefined | TurtleItemStack;
}
