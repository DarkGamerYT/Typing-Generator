/**
 * @beta
 * @remarks
 * Gets the current item cooldown time for a particular
 * cooldown category.
 *
 * @param itemCategory
 * Specifies the cooldown category to retrieve the current
 * cooldown for.
 * @throws This function can throw errors.@example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * console.warn(`Item cooldown: ${player.getItemCooldown("ender_pearl")}`);
 * ```
 */