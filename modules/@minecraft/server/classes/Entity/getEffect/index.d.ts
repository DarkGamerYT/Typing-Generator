/**
 * @remarks Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.
 *
 * @param effectType
 * The effect identifier.
 * @returns Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 *
 * effect.addEffect("speed", 10, { amplifier: 2 });
 * 
 * const effect = skelly.getEffect("speed");
 * console.warn(`Effect: ${effect.displayName} ${effect.amplifier} | ${effect.duration}s left`);
 * ```
 */