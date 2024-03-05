/**
 * @remarks Applies a set of damage to an entity.
 *
 * This function can't be called in read-only mode.
 *
 * @param amount
 * Amount of damage to apply.
 * @param options
 * Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity.
 * @returns
 * Whether the entity takes any damage.
 * This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 *
 * skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
 * ```
 */