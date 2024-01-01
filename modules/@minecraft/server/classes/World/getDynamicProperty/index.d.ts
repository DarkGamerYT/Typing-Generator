/**
 * @remarks Returns a property value.
 *
 * @param identifier
 * The property identifier.
 * @returns Returns the value for the property, or undefined if the property has not been set.
 * @throws Throws if the given dynamic property identifier is not defined.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the property value
 * const value = world.getDynamicProperty("test");
 * 
 * console.warn(`Dynamic Property value: ${value}`);
 * ```
 */