/**
 * @remarks
 * Gets an {@link ItemStack} of the item at the specified slot.
 * If the slot is empty, returns `undefined`.
 * This method does not change or clear the contents of the specified slot.
 * To get a reference to a particular slot, see {@link Container.getSlot}.
 *
 * @param slot
 * Zero-based index of the slot to retrieve items from.
 * @throws Throws if the container is invalid or if the `slot` index is out of bounds.
 */