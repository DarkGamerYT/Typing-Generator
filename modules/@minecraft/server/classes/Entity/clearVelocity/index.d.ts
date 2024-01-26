/**
 * @remarks
 * Sets the current velocity of the Entity to zero.
 * Note that this method may not have an impact on Players.
 *
 * This function can't be called in read-only mode.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:zombie", { x: 1, y: 2, z: 3 });
 *
 * zombie.clearVelocity();
 *
 * // throw the zombie up in the air
 * zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
 * ```
 */