/**
 * @remarks Creates a new itemstack as an entity at the specified location.
 *
 * This function can't be called in read-only mode.
 *
 * @param location
 * The location at which to create the item stack.
 * @returns Newly created itemstack entity at the specified location.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * const dirtItem = new ItemStack("minecraft:dirt", 1);
 * overworld.spawnItem(dirtItem, { x: 1, y: 2, z: 3 });
 * ```
 */