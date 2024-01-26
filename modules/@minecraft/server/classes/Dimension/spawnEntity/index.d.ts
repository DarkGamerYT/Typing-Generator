/**
 * @remarks Creates a new entity (e.g., a mob) at the specified location.
 *
 * This function can't be called in read-only mode.
 *
 * @param identifier
 * Identifier of the type of entity to spawn.
 * If no namespace is specified, 'minecraft:' is assumed.
 * @param location
 * The location at which to create the entity.
 * @returns Newly created entity at the specified location.
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
 * overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 * ```
 */