/** @noSelfInFile */
declare namespace os {
  /**
   * Loads the given API into the global environment.
   * This function loads and executes the file at the given path, and all global
   * variables and functions exported by it will by available through the use of
   * `myAPI.<function name>`, where `myAPI` is the base name of the API file.
   * @param string path The path of the API to load.
   * @return Whether or not the API was successfully loaded.
   * @deprecated When possible it's best to avoid using this function. It pollutes the global table and can mask errors.
   */
  function loadAPI(path: string): boolean;
  /**
   *  Unloads an API which was loaded by @{os.loadAPI}.
   *
   * This effectively removes the specified table from `_G`.
   *
   * @param string name The name of the API to unload.
   * @deprecated See os.loadAPI for why.
   */
  function unloadAPI(name: string): void;

  /**
   * Pause execution of the current thread and waits for any events matching
   * `filter`.
   * This function coroutine.yield|yields the current process and waits for it
   * to be resumed with a vararg list where the first element matches `filter`.
   * If no `filter` is supplied, this will match all events.
   * Unlike os.pullEventRaw, it will stop the application upon a "terminate"
   * event, printing the error "Terminated".
   * @param filter Event to filter for.
   * @return event The name of the event that fired.
   * @return param... Optional additional parameters of the event.
   * @usage Listen for `mouse_click` events.
   *     while true do
   *         local event, button, x, y = os.function pullEvent("mouse_click")
   *         function print("Button", button, "was clicked at", x, ",", y)
   *     end
   * @usage Listen for multiple events.
   *     while true do
   *         local eventData = {os.function pullEvent()}
   *         local event = eventData[1]
   *         if event == "mouse_click" then
   *             function print("Button", eventData[2], "was clicked at", eventData[3], ",", eventData[4])
   *         elseif event == "key" then
   *             function print("Key code", eventData[2], "was pressed")
   *         end
   *     end
   * @see os.pullEventRaw To pull the terminate event.
   */
  function pullEvent(filter?: string): LuaMultiReturn<[string, ...any]>;

  /**
   * Pause execution of the current thread and waits for events, including the`terminate` event.
   * This behaves almost the same as `os.pullEvent`, except it allows you to handle
   * the `terminate` event yourself - the program will not stop execution when
   * <kbd>Ctrl+T</kbd> is pressed.
   * @param filter Event to filter for.
   * @return event The name of the event that fired.
   * @return param... Optional additional parameters of the event.
   * @usage Listen for `terminate` events.
   *     while true do
   *         local event = os.function pullEventRaw()
   *         if event == "terminate" then
   *             function print("Caught terminate event!")
   *         end
   *     end
   * @see os.pullEvent To pull events normally.
   */
  function pullEventRaw(filter?: string): LuaMultiReturn<[string, ...any]>;

  /**
   * Pauses execution for the specified number of seconds, alias of _G.sleep.
   * @param time The number of seconds to sleep for, rounded up to the nearest multiple of 0.05.
   */
  function sleep(time: number): void;

  /**
   * Get the current CraftOS version (for example, CraftOS 1.8).
   */
  function version(): string;
  /**
   * Run the program at the given path with the specified environment andarguments.
   * This function does not resolve program names like the shell does. This means
   * that, for example, `os.function run("edit")` will not work. As well as this, it does not
   * provide access to the @{shell} API in the environment. For this behaviour, use
   * @{shell.run} instead.
   * If the program cannot be found, or failed to run, it will print the error and
   * return `false`. If you want to handle this more gracefully, use an alternative
   * such as @{loadfile}.
   * @param env The environment to run the program with.
   * @param path The exact path of the program to run.
   * @param arguments The arguments to pass to the program.
   * @return Whether or not the program ran successfully.
   * @usage Run the default shell from within your program:
   *     os.function run({}, "/rom/programs/shell.lua")
   * @see shell.run
   * @see loadfile
   */
  function run(env: LuaMap<string, any>, path: string, ...arguments: string[]): boolean;
  /**
   * Adds an event to the event queue.
   *
   * This event can later be pulled with os.pullEvent.
   */
  function queueEvent(name: string, ...parameters: any[]): number;
  /**
   * Starts a timer that will run for the specified number of seconds. Once the timer fires, a timer event will be added to the queue with the ID returned from this function as the first parameter.
   *
   * As with sleep, timer will automatically be rounded up to the nearest multiple of 0.05 seconds, as it waits for a fixed amount of world ticks.
   * @param timer The number of seconds until the timer fires.
   * @returns The ID of the new timer. This can be used to filter the timer event, or cancel the timer.
   */
  function startTimer(timer: number): number;

  /**
   * Cancels a timer previously started with startTimer.
   */
  function cancelTimer(token: number): void;

  /**
   * Sets an alarm that will fire at the specified in-game time.
   */
  function setAlarm(time: number): number;
  /**
   * Cancels an alarm previously started with setAlarm.
   */
  function cancelAlarm(token: number): void;
  /**
   * Shuts down the computer immediately.
   */
  function shutdown(): void;
  /**
   * Reboots the computer immediately.
   */
  function reboot(): void;
  /**
   * Returns the ID of the computer.
   */
  function getComputerID(): number;
  /**
   * Returns the ID of the computer.
   */
  function computerID(): number;
  /**
   * Returns the label of the computer, or nil if none is set.
   */
  function getComputerLabel(): undefined | string;
  /**
   * Returns the label of the computer, or nil if none is set.
   */
  function computerLabel(): undefined | string;
  /**
   * Set the label of this computer.
   */
  function setComputerLabel(label?: string): void;
  /**
   * Returns the number of seconds that the computer has been running.
   */
  function clock(): number;
  /**
   * Returns the current time depending on the string passed in.
   */
  function time(): string | number;
  /**
   * Returns the day depending on the locale specified.
   */
  function day(args: string): number;
  /**
   * Returns the number of milliseconds since an epoch depending on the locale.
   */
  function epoch(args: string): number;
  /**
   * Returns a date string (or table) using a specified format string and optional time to format.
   */
  function date(format?: string, time?: number): string | number;
}
