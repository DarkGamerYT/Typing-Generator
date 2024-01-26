/**
 * @remarks Sets an item stack within a particular slot.
 *
 * This function can't be called in read-only mode.
 *
 * @param slot
 * Zero-based index of the slot to set an item at.
 * @param itemStack
 * Stack of items to place within the specified slot.
 * Setting `itemStack` to undefined will clear the slot.
 * @throws Throws if the container is invalid or if the `slot` index is out of bounds.
 */