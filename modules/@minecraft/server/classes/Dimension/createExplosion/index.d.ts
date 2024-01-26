/**
 * @remarks Creates an explosion at the specified location.
 *
 * This function can't be called in read-only mode.
 *
 * @param location
 * The location of the explosion.
 * @param radius
 * Radius, in blocks, of the explosion to create.
 * @param explosionOptions
 * Additional configurable options for the explosion.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * //Creates an explosion that causes fire
 * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { causesFire: true });
 * 
 * //Creates an explosion that breaks blocks
 * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { breaksBlocks: true });
 * 
 * //Creates an explosion that can go underwater
 * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { allowUnderwater: true });
 * ```
 */