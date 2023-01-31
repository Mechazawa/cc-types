/// <reference path="./term.d.ts" />

/** @noSelf */
declare namespace window {
  /**
   * Returns a terminal object that is a space within the specified parent terminal object. This can then be used (or even redirected to) in the same manner as eg a wrapped monitor. Refer to the term API for a list of functions available to it.
   *
   * term itself may not be passed as the parent, though term.native is acceptable. Generally, term.current or a wrapped monitor will be most suitable, though windows may even have other windows assigned as their parents.
   * @param parent The parent terminal redirect to draw to.
   * @param nX The x coordinate this window is drawn at in the parent terminal
   * @param nY The y coordinate this window is drawn at in the parent terminal
   * @param nWidth The width of this window
   * @param nHeight The height of this window
   * @param bStartVisible?n Whether this window is visible by default. Defaults to true.
   */
  function create(parent: Redirect, nX: number, nY: number, nWidth: number, nHeight: number, bStartVisible?: boolean): Window;
}

/** @noSelf */
declare interface Window extends Redirect {
  /**
   * Get the buffered contents of a line in this window.
   * @param y The y position of the line to get
   * @returns 
   *    The textual content of this line.
   *    The text colours of this line, suitable for use with term.blit.
   *    The background colours of this line, suitable for use with term.blit.
   * @throws If y is not between 1 and this window's height.
   */
  getLine(y: number): LuaMultiReturn<[string, string, string]>;

  /**
   * Set whether this window is visible. Invisible windows will not be drawn to the screen until they are made visible again.
   *
   * Making an invisible window visible will immediately draw it.
   * @param visible Whether this window is visible.
   */
  setVisible(visible: boolean): void;

  /**
   * Get whether this window is visible. Invisible windows will not be drawn to the screen until they are made visible again.
   */
  isVisible(): boolean;

  /**
   * Draw this window. This does nothing if the window is not visible.
   */
  redraw(): void;

  /**
   * Set the current terminal's cursor to where this window's cursor is. This does nothing if the window is not visible.
   */
  restoreCursor(): void;

  /**
   * Get the position of the top left corner of this window.
   */
  getPosition(): LuaMultiReturn<[number, number]>;

  /**
   * Reposition or resize the given window.
   *
   * This function also accepts arguments to change the size of this window. It is recommended that you fire a term_resize event after changing a window's, to allow programs to adjust their sizing.
   *
   * @param new_x The new x position of this window.
   * @param new_y The new y position of this window.
   * @param new_width The new width of this window.
   * @param new_height The new height of this window.
   * @param new_parent The new redirect object this window should draw to.
   */
  reposition(new_x: number, new_y: number, new_width?: number, new_height?: number, new_parent?: Redirect);
}