/**
 * @remarks Plays a sound for all players.
 *
 * This function can't be called in read-only mode.
 *
 * @throws
 * An error will be thrown if volume is less than 0.0.
 * An error will be thrown if fade is less than 0.0.
 * An error will be thrown if pitch is less than 0.01.
 * An error will be thrown if volume is less than 0.0.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * const location = { x: 0, y: 0, z: 0 };
 * world.playSound("bucket.fill_water", location, { pitch: 1.0, volume: 1.0 });
 * ```
 */