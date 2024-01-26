/**
 * @remarks Sets the world time.
 *
 * This function can't be called in read-only mode.
 *
 * @param absoluteTime
 * The world time, in ticks.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * world.setAbsoluteTime(0);
 * ```
 */