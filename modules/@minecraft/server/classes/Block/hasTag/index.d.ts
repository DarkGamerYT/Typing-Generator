/**
 * @beta
 * @remarks
 * Checks to see if the permutation of this block has a
 * specific tag.
 *
 * @param tag
 * Tag to check for.
 * @returns
 * Returns `true` if the permutation of this block has the tag,
 * else `false`.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * console.warn(`Block is dirt: ${block.hasTag("dirt")}`);
 * console.warn(`Block is wood: ${block.hasTag("wood")}`);
 * console.warn(`Block is stone: ${block.hasTag("stone")}`);
 * ```
 */