/**
 * @remarks Adds or updates an effect, like poison, to the entity.
 *
 * This function can't be called in read-only mode.
 *
 * @param effectType
 * Type of effect to add to the entity.
 * @param duration
 * Amount of time, in ticks, for the effect to apply.
 * There are 20 ticks per second.
 * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
 * The value must be within the range [0, 20000000].
 * @param options
 * Additional options for the effect.
 * @returns
 * Returns nothing if the effect was added or updated successfully.
 * This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * const fox = overworld.spawnEntity("minecraft:fox", {
 *     x: 1,
 *     y: 2,
 *     z: 3
 * });
 * 
 * fox.addEffect("speed", 10, { amplifier: 2 });
 * ```
 */