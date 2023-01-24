/** @noSelfInFile */
declare namespace term {
  /**
   * Get the default palette value for a colour.
   */
  function nativePaletteColour(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Get the default palette value for a colour.
   */
  function nativePaletteColor(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Write text at the current cursor position, moving the cursor to the end of the text.
   */
  function write(text: string): void;
  /**
   * Move all positions up (or down) by y pixels.
   */
  function scroll(y: number): void;
  /**
   * Get the position of the cursor.
   */
  function getCursorPos(): LuaMultiReturn<[number, number]>;
  /**
   * Set the position of the cursor.
   */
  function setCursorPos(x: number, y: number): void;
  /**
   * Checks if the cursor is currently blinking.
   */
  function getCursorBlink(): boolean;
  /**
   * Sets whether the cursor should be visible (and blinking) at the current cursor position.
   */
  function setCursorBlink(blink: boolean): void;
  /**
   * Get the size of the terminal.
   */
  function getSize(): LuaMultiReturn<[number, number]>;
  /**
   * Clears the terminal, filling it with the current background colour.
   */
  function clear(): void;
  /**
   * Clears the line the cursor is currently on, filling it with the current background colour.
   */
  function clearLine(): void;
  /**
   * Return the colour that new text will be written as.
   */
  function getTextColour(): number;
  /**
   * Return the colour that new text will be written as.
   */
  function getTextColor(): number;
  /**
   * Set the colour that new text will be written as.
   */
  function setTextColour(colour: number): void;
  /**
   * Set the colour that new text will be written as.
   */
  function setTextColor(colour: number): void;
  /**
   * Return the current background colour.
   */
  function getBackgroundColour(): number;
  /**
   * Return the current background colour.
   */
  function getBackgroundColor(): number;
  /**
   * Set the current background colour.
   */
  function setBackgroundColour(colour: number): void;
  /**
   * Set the current background colour.
   */
  function setBackgroundColor(colour: number): void;
  /**
   * Determine if this terminal supports colour.
   */
  function isColour(): boolean;
  /**
   * Determine if this terminal supports colour.
   */
  function isColor(): boolean;
  /**
   * Writes text to the terminal with the specific foreground and background characters.
   */
  function blit(text: string, textColour: number, backgroundColour: number): void;
  /**
   * Set the palette for a specific colour.
   */
  function setPaletteColour(...colors: number[]): void;
  /**
   * Set the palette for a specific colour.
   */
  function setPaletteColor(...colors: number[]): void;
  /**
   * Get the current palette for a specific colour.
   */
  function getPaletteColour(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Get the current palette for a specific colour.
   */
  function getPaletteColor(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Redirects terminal output to a monitor, a window, or any other custom terminal object.
   */
  function redirect(target: any): any;
  /**
   * Returns the current terminal object of the computer.
   */
  function current(): any;
  /**
   * Get the native terminal object of the current computer.
   */
  function native(): any;
}
