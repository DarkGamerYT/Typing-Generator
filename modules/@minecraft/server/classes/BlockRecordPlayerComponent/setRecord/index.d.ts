/**
 * @remarks Sets and plays a record based on an item type.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const recordPlayer = block.getComponent("recordPlayer");
 * recordPlayer.setRecord("minecraft:music_disc_otherside");
 * ```
 */