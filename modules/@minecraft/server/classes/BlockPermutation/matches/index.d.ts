/**
 * @remarks
 * Returns a boolean whether a specified permutation matches this permutation.
 * If states is not specified, matches checks against the set of types more broadly.
 *
 * @param blockName
 * An optional set of states to compare against.
 *
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * const permutation = block.permutation;
 * 
 * const matches = permutation.matches("minecraft:dirt");
 * console.warn(`Block matches: ${matches}`);
 * ```
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * const permutation = block.permutation;
 * 
 * const matches = permutation.matches("minecraft:oak_log", { direction: 1 });
 * console.warn(`Block matches: ${matches}`);
 * ```
 */