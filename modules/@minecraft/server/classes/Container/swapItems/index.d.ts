/**
 * @remarks Swaps items between two different slots within containers.
 *
 * This function can't be called in read-only mode.
 *
 * @param slot
 * Zero-based index of the slot to swap from this container.
 * @param otherSlot
 * Zero-based index of the slot to swap with.
 * @param otherContainer
 * Target container to swap with. Note this can be the same container as this source.
 * @throws Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.
 */