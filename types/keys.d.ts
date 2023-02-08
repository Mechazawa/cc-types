/** @noSelfInFile */
declare namespace keys {
  export const space: 32;
  export const apostrophe: 39;
  export const comma: 44;
  export const minus: 45;
  export const period: 46;
  export const slash: 47;
  export const zero: 48;
  export const one: 49;
  export const two: 50;
  export const three: 51;
  export const four: 52;
  export const five: 53;
  export const six: 54;
  export const seven: 55;
  export const eight: 56;
  export const nine: 57;
  export const semicolon: 59;
  export const equals: 61;
  export const a: 65;
  export const b: 66;
  export const c: 67;
  export const d: 68;
  export const e: 69;
  export const f: 70;
  export const g: 71;
  export const h: 72;
  export const i: 73;
  export const j: 74;
  export const k: 75;
  export const l: 76;
  export const m: 77;
  export const n: 78;
  export const o: 79;
  export const p: 80;
  export const q: 81;
  export const r: 82;
  export const s: 83;
  export const t: 84;
  export const u: 85;
  export const v: 86;
  export const w: 87;
  export const x: 88;
  export const y: 89;
  export const z: 90;
  export const leftBracket: 91;
  export const backslash: 92;
  export const rightBracket: 93;
  export const grave: 96;
//   export const world1: 161;
//   export const world2: 162;
  export const enter: 257;
  export const tab: 258;
  export const backspace: 259;
  export const insert: 260;
  export const _delete: 261;
  export const right: 262;
  export const left: 263;
  export const down: 264;
  export const up: 265;
  export const pageUp: 266;
  export const pageDown: 267;
  export const home: 268;
  export const end: 269;
  export const capsLock: 280;
  export const scrollLock: 281;
  export const numLock: 282;
  export const printScreen: 283;
  export const pause: 284;
  export const f1: 290;
  export const f2: 291;
  export const f3: 292;
  export const f4: 293;
  export const f5: 294;
  export const f6: 295;
  export const f7: 296;
  export const f8: 297;
  export const f9: 298;
  export const f10: 299;
  export const f11: 300;
  export const f12: 301;
  export const f13: 302;
  export const f14: 303;
  export const f15: 304;
  export const f16: 305;
  export const f17: 306;
  export const f18: 307;
  export const f19: 308;
  export const f20: 309;
  export const f21: 310;
  export const f22: 311;
  export const f23: 312;
  export const f24: 313;
  export const f25: 314;
  export const numPad0: 320;
  export const numPad1: 321;
  export const numPad2: 322;
  export const numPad3: 323;
  export const numPad4: 324;
  export const numPad5: 325;
  export const numPad6: 326;
  export const numPad7: 327;
  export const numPad8: 328;
  export const numPad9: 329;
  export const numPadDecimal: 330;
  export const numPadDivide: 331;
  export const numPadMultiply: 332;
  export const numPadSubtract: 333;
  export const numPadAdd: 334;
  export const numPadEnter: 335;
  export const numPadEqual: 336;
  export const leftShift: 340;
  export const leftCtrl: 341;
  export const leftAlt: 342;
  export const leftSuper: 343;
  export const rightShift: 344;
  export const rightCtrl: 345;
  export const rightAlt: 346;
//   export const rightSuper: 347;
  export const menu: 348;

  /**
   * Translates a numerical key code to a human-readable name. The human-readable
   * name is one of the constants in the keys API.
   * 
   * @param code The key code to look up.
   * @treturn The name of the key, or `nil` if not a valid key code.
   * @example keys.getName(keys.enter)
   */
  export function getName(nKey: number): string | undefined;

  export {_delete as delete};
}