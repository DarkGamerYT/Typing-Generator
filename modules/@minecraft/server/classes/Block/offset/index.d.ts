/**
 * @remarks Returns a block at an offset relative vector to this block.
 *
 * @param offset
 * The offset vector. For example, an offset of 0, 1, 0 will
 * return the block above the current block.
 * @returns Block at the specified offset, or undefined if that block could not be retrieved (for example, the block and its relative chunk is not loaded yet.)
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 */