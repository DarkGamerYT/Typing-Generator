/**
 * @beta
 * @remarks
 * Will change the specified players permissions, and whether
 * they are operator or not.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.setOp(false);
 * ```
 */