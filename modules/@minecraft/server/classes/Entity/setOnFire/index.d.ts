/**
 * @beta
 * @remarks
 * Sets an entity on fire (if it is not in water or rain). Note
 * that you can call getComponent('minecraft:onfire') and, if
 * present, the entity is on fire.
 *
 * This function can't be called in read-only mode.
 *
 * @param seconds
 * Length of time to set the entity on fire.
 * @param useEffects
 * Whether side-effects should be applied (e.g. thawing freeze)
 * and other conditions such as rain or fire protection should
 * be taken into consideration.
 * @returns
 * Whether the entity was set on fire. This can fail if seconds
 * is less than or equal to zero, the entity is wet or the
 * entity is immune to fire.
 * @throws This function can throw errors.
 * 
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 *
 * skelly.setOnFire(40, true);
 * ```
 */