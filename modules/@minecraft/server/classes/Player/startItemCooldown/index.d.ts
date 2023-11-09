/**
 * @beta
 * @remarks
 * Sets the item cooldown time for a particular cooldown
 * category.
 *
 * This function can't be called in read-only mode.
 *
 * @param itemCategory
 * Specifies the cooldown category to retrieve the current
 * cooldown for.
 * @param tickDuration
 * Duration in ticks of the item cooldown.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * //Starts an item cooldown for the ender pearl for 5 seconds
 * player.startItemCooldown("ender_pearl", 20 * 5);
 * ```
 */