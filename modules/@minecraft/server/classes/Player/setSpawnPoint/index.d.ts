/**
 * @remarks Sets the current starting spawn point for this particular player.
 *
 * This function can't be called in read-only mode.
 * @throws This function can throw errors.
 *
 * {@link Error}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.setSpawnPoint({
 *     x: 0,
 *     y: 60,
 *     z: 0,
 *     dimension: world.getDimension("the_end");
 * });
 * ```
 */