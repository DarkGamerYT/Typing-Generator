/**
 * @beta
 * @remarks Tries to set the block in the dimension to the state of the permutation by first checking if the placement is valid.
 *
 * This function can't be called in read-only mode.
 *
 * @param permutation
 * Permutation that contains a set of property states for the Block.
 * @returns Returns `true` if the block permutation data was successfully set, else `false`.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world, BlockPermutation } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * 
 * block.trySetPermutation(BlockPermutation.resolve("minecraft:dirt"));
 * ```
 */