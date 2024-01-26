/**
 * @remarks Sets a default spawn location for all players.
 *
 * This function can't be called in read-only mode.
 *
 * @param spawnLocation
 * Location of the spawn point. Note that this is assumed to be within the overworld dimension.
 * @throws Throws if the provided spawn location is out of bounds.
 *
 * {@link Error}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * world.setDefaultSpawnLocation({ x: 0, y: 4, z: 0 });
 * ```
 */