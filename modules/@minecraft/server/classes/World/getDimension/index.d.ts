/**
 * @remarks Returns a dimension object.
 *
 * @param dimensionId
 * The name of the dimension. For example, "overworld",
 * "nether" or "the_end".
 * @returns The requested dimension
 * @throws Throws if the given dimension name is invalid
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * const overworld = world.getDimension("overworld");
 * const nether = world.getDimension("nether");
 * const theEnd = world.getDimension("the_end");
 * ```
 */