/**
 * @remarks Moves an item from one slot to another, potentially across containers.
 *
 * This function can't be called in read-only mode.
 *
 * @param fromSlot
 * Zero-based index of the slot to transfer an item from, on this container.
 * @param toSlot
 * Zero-based index of the slot to transfer an item to, on `toContainer`.
 * @param toContainer
 * Target container to transfer to. Note this can be the same container as the source.
 * @throws Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.
 */