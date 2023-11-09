/**
 * @beta
 * @remarks
 * Sets the time of day.
 *
 * This function can't be called in read-only mode.
 *
 * @param timeOfDay
 * The time of day, in ticks, between 0 and 24000.
 * @throws
 * Throws if the provided time of day is not within the valid
 * range.
 * @example
 * ```javascript
 * import { world, TimeOfDay } from "@minecraft/server";
 *
 * world.setTimeOfDay(TimeOfDay.Noon);
 * ```
 */