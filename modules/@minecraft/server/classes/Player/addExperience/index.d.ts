/**
 * @beta
 * @remarks
 * Adds/removes experience to/from the Player and returns the
 * current experience of the Player.
 *
 * This function can't be called in read-only mode.
 *
 * @param amount
 * Amount of experience to add. Note that this can be negative.
 * Min/max bounds at -2^24 ~ 2^24
 * @returns
 * Returns the current experience of the Player.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.addExperience(1);
 * console.warn(`Total XP: ${player.getTotalXp()}`);
 * ```
 */