/**
 * A pretty printer for rendering data structures in an aesthetically
 * pleasing manner.
 * 
 * In order to display something using @{cc.pretty}, you build up a series of
 * @{Doc|documents}. These behave a little bit like strings; you can concatenate
 * them together and then print them to the screen.
 * 
 * However, documents also allow you to control how they should be printed. There
 * are several functions (such as @{nest} and @{group}) which allow you to control
 * the "layout" of the document. When you come to display the document, the 'best'
 * (most compact) layout is used.
 * 
 * The structure of this module is based on [A Prettier Printer][prettier].
 * 
 * [prettier]: https://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf "A Prettier Printer"
 * 
 * @module cc.pretty
 * @since 1.87.0
 * @usage Print a table to the terminal
 * 
 *     local pretty = require "cc.pretty"
 *     pretty.pretty_print({ 1, 2, 3 })
 * 
 * @usage Build a custom document and display it
 * 
 *     local pretty = require "cc.pretty"
 *     pretty.print(pretty.group(pretty.text("hello") .. pretty.space_line .. pretty.text("world")))
 * 
 * @noSelf
 * @noResolution
 */
declare module "cc.pretty" {
  /**
   * An empty document.
   */
  export const empty: Doc;

  /**
   * A document with a single space in it.
   */
  export const space: Doc;

  /**
   * A line break. When collapsed with group, this will be replaced with empty.
   */
  export const line: Doc;

  /**
   * A line break. When collapsed with group, this will be replaced with space.
   */
  export const space_line: Doc;

  /**
   * Create a new document from a string.
   *
   * If your string contains multiple lines, @{group} will flatten the string
   * into a single line, with spaces between each line.
   *
   * @param text The string to construct a new document with.
   * @param colour The colour this text should be printed with. If not given, we default to the current colour.
   * @return The document with the provided text.
   * @usage Write some blue text.
   *     local pretty = require "cc.pretty"
   *     pretty.print(pretty.text("Hello!", colours.blue))
   */
  export function text(text: string, colour?: number): Doc;

  /**
   * Concatenate several documents together. This behaves very similar to string concatenation.
   * @param data The documents to concatenate.
   * @returns The concatenated documents.
   */ 
  export function concat(...data: (Doc|string)[]): Doc;

  /**
   * Indent later lines of the given document with the given number of spaces.
   * @param depth The number of spaces with which the document should be indented.
   * @param doc The document to indent.
   * @returns The nested document.
   */
  export function nest(depth: number, doc: Doc): Doc;

  /**
   * Builds a document which is displayed on a single line if there is enough room, or as normal if not.
   * @param doc The document to group.
   * @returns The grouped document.
   */
  export function group(doc: Doc): Doc;

  /**
   * Display a document on the terminal.
   * @param doc The document to render.
   * @param ribbon_frac The maximum fraction of the width that we should write in.
   */
  export function write(doc: Doc, ribbon_frac: number): void;

  /**
   * Display a document on the terminal with a trailing new line.
   * @param doc The document to render.
   * @param ribbon_frac The maximum fraction of the width that we should write in.
   */
  export function print(doc: Doc, ribbon_frac: number): void;

  /**
   * Render a document, converting it into a string.
   * @param doc The document to render.
   * @param width The maximum width of this document. Note that long strings will not be wrapped to fit this width - it is only used for finding the best layout.
   * @param ribbon_frac The maximum fraction of the width that we should write in.
   */
  export function render(doc: Doc, width: number, ribbon_frac: number): string;

  /**
   * Pretty-print an arbitrary object, converting it into a document.
   * This can then be rendered with write or print.
   * @param obj The object to pretty-print.
   * @param options.function_args Show the arguments to a function if known (`false` by default). 
   * @param options.function_source Show where the function was defined, instead of `function: xxxxxxxx` (`false` by default).
   * @param ribbon_frac The maximum fraction of the width that we should write in.
   * @returns The object formatted as a document. 
   */
  export function pretty(obj: any, options?: { function_args?: boolean, function_source?: boolean }, ribbon_frac?: number): Doc;

  /**
   * A shortcut for calling pretty and print together.
   * @param obj The object to pretty-print.
   * @param options.function_args Show the arguments to a function if known (`false` by default). 
   * @param options.function_source Show where the function was defined, instead of `function: xxxxxxxx` (`false` by default).
   * @param ribbon_frac The maximum fraction of the width that we should write in.
   */
  export function pretty_print(obj: any, options?: { function_args?: boolean, function_source?: boolean }, ribbon_frac?: number): void;

  /**
   * A document containing formatted text, with multiple possible layouts.
   * Documents effectively represent a sequence of strings in alternative layouts, which we will try to print in the most compact form necessary.
   * @noSelf
   */
  export interface Doc {
    [key: string]: any,
  }
}

