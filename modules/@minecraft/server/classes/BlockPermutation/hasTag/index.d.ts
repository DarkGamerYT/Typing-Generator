/**
 * @beta
 * @remarks
 * Checks to see if the permutation has a specific tag.
 *
 * @returns
 * Returns `true` if the permutation has the tag, else `false`.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * const permutation = block.permutation;
 *
 * console.warn(`Block is dirt: ${permutation.hasTag("dirt")}`);
 * console.warn(`Block is wood: ${permutation.hasTag("wood")}`);
 * console.warn(`Block is stone: ${permutation.hasTag("stone")}`);
 * ```
 */