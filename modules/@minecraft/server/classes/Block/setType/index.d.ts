/**
 * @beta
 * @remarks Sets the type of block.
 *
 * This function can't be called in read-only mode.
 *
 * @param blockType
 * Identifier of the type of block to apply - for example, minecraft:powered_repeater.
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
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * block.setType("minecraft:dirt");
 * ```
 * 
 * @example
 * ```javascript
 * import { world, BlockTypes } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * block.setType(BlockTypes.get("minecraft:dirt"));
 * ```
 */