/// <reference path="./peripherals/generic/EnergyStorage.d.ts" />
/// <reference path="./peripherals/generic/FluidStorage.d.ts" />
/// <reference path="./peripherals/generic/Inventory.d.ts" />

/** @noSelfInFile */
declare namespace peripheral {
  interface WrappedPeripheral {}

  interface GenericPeripheral extends WrappedPeripheral {
    [name: string]: Function;
  }

  /**
   * Provides a list of all peripherals available.
   * @returns A list of the names of all attached peripherals.
   */
  function getNames(): string[];
  /**
   * Determines if a peripheral is present with the given name.
   * @returns If a peripheral is present with the given name.
   */
  function isPresent(name: string): boolean;
  /**
   * Get the types of a named or wrapped peripheral.
   */
  function getType(peripheral: string | WrappedPeripheral): string[];
  /**
   * peripheral_type)	Check if a peripheral is of a particular type.
   */
  function hasType(peripheral: string | WrappedPeripheral, peripheral_type: string): boolean | undefined;
  /**
   * Get all available methods for the peripheral with the given name.
   */
  function getMethods(name: string): string[] | undefined;
  /**
   * Get the name of a peripheral wrapped with peripheral.wrap.
   */
  function getName(peripheral: WrappedPeripheral): string;
  /**
   * Call a method on the peripheral with the given name.
   */
  function call(name: string, method: string, ...args: string[]): any;
  /**
   * Get a table containing all functions available on a peripheral.
   */
  function wrap(name: string): WrappedPeripheral;
  /**
   * Find all peripherals of a specific type, and return the wrapped peripherals.
   */
  function find(
    ty: string,
    filter?: (name: string, wrapped: WrappedPeripheral) => boolean
  ): LuaMultiReturn<WrappedPeripheral[]>;
}
