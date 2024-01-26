/**
 * @remarks Starts a new cooldown period for this item.
 *
 * This function can't be called in read-only mode.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const cooldown = itemStack.getComponent("cooldown");
 * cooldown.startCooldown(player);
 * ```
 */