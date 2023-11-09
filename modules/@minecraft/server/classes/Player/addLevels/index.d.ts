/**
 * @beta
 * @remarks
 * Adds/removes level to/from the Player and returns the
 * current level of the Player.
 *
 * This function can't be called in read-only mode.
 *
 * @param amount
 * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
 * @returns
 * Returns the current level of the Player.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.addLevels(1);
 * console.warn(`Player's current level: ${player.level}`);
 * ```
 */