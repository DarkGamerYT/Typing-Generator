/**
 * @remarks
 * Returns a block instance at the given location.
 *
 * @param location
 * The location at which to return a block.
 * @returns
 * Block at the specified location, or 'undefined' if asking
 * for a block at an unloaded chunk.
 * @throws
 * PositionInUnloadedChunkError: Exception thrown when trying
 * to interact with a Block object that isn't in a loaded and
 * ticking chunk anymore
 *
 * PositionOutOfWorldBoundariesError: Exception thrown when
 * trying to interact with a position outside of dimension
 * height range
 *
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 */