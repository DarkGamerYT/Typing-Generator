/**
 * @beta
 * @remarks Returns the net redstone power of this block.
 *
 * @returns Returns undefined if redstone power is not applicable to this block.
 * @throws This function can throw errors.
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
 * const redstonePower = block.getRedstonePower();
 * console.warn(`Redstone Power: ${redstonePower}`);
 * ```
 */