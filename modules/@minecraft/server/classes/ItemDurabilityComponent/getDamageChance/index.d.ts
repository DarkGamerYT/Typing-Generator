/**
 * @remarks Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking level.
 *
 * This function can't be called in read-only mode.
 *
 * @param unbreaking
 * Unbreaking factor to consider in factoring the damage chance.
 * Incoming unbreaking parameter must be greater than 0.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const durability = itemStack.getComponent("durability");
 * console.warn(`Damage chance: ${durability.getDamageChance(2)}`);
 * ```
 */