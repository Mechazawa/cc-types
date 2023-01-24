/** @noSelfInFile */
declare namespace colors {
  const white: number;
  const orange: number;
  const magenta: number;
  const lightBlue: number;
  const yellow: number;
  const lime: number;
  const pink: number;
  const gray: number;
  const lightGray: number;
  const cyan: number;
  const purple: number;
  const blue: number;
  const brown: number;
  const green: number;
  const red: number;
  const black: number;

  function combine(...colors: number[]): number;
  function subtract(color: number, ...colors: number[]): number;
  function test(colors: number | number[], color: number): boolean;
  function packRGB(r: number, g: number, b: number): number;
  function unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
  function toBlit(color: number): string;
}
