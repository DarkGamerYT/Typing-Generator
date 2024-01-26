/**
 * @remarks Sets a specified property to a value.
 *
 * @param identifier
 * The property identifier.
 * @param value
 * Data value of the property to set.
 * @throws Throws if the given dynamic property identifier is not defined.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the property value
 * const value = world.getDynamicProperty("test");
 * world.setDynamicProperty("test", value + 1);
 * ```
 */