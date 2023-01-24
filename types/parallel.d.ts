/** @noSelfInFile */
declare namespace parallel {
  /**
   * Switches between execution of the functions, until any of them
   * finishes. If any of the functions errors, the message is propagated upwards
   * from the @{parallel.waitForAny} call.
   */
  function waitForAny(...fs: Function[]): void;

  /**
   * Switches between execution of the functions, until all of them are
   * finished. If any of the functions errors, the message is propagated upwards
   * from the @{parallel.waitForAll} call.
   */
  function waitForAll(...fs: Function[]): void;
}
