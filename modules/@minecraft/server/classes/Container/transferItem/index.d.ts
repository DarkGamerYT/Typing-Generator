/**
 * @remarks Moves an item from one slot to another container, or to the first available slot in the same container.
 *
 * This function can't be called in read-only mode.
 *
 * @param fromSlot
 * Zero-based index of the slot to transfer an item from, on this container.
 * @param toContainer
 * Target container to transfer to. Note this can be the same container as the source.
 * @returns
 * An itemStack with the items that couldn't be transferred.
 * Returns undefined if all items were transferred.
 * @throws Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.
 */