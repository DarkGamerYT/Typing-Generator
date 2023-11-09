/**
 * @beta
 * @remarks
 * Checks to see whether it is valid to place the specified
 * block type or block permutation, on a specified face on this
 * block
 *
 * @param blockToPlace
 * Block type or block permutation to check placement for.
 * @param faceToPlaceOn
 * Optional specific face of this block to check placement
 * against.
 * @returns
 * Returns `true` if the block type or permutation can be
 * placed on this block, else `false`.
 * @throws This function can throw errors.
 *
 * {@link Error}
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * 
 * @example
 * ```javascript
 * import { world, Direction } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * 
 * const canPlace = block.canPlace("minecraft:dirt", Direction.Up);
 * console.warn(`Can place on dirt: ${canPlace}`);
 * ```
 * @example
 * 
 * ```javascript
 * import { world, BlockTypes, Direction } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * 
 * const canPlace = block.canPlace(BlockTypes.get("minecraft:dirt"), Direction.Up);
 * console.warn(`Can place on dirt: ${canPlace}`);
 * ```
 * 
 * @example
 * ```javascript
 * import { world, BlockPermutation, Direction } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * 
 * const canPlace = block.canPlace(BlockPermutation.resolve("minecraft:dirt"), Direction.Up);
 * console.warn(`Can place on dirt: ${canPlace}`);
 * ```
 */