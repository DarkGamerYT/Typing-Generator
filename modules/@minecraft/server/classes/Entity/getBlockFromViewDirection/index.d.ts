/**
 * @remarks Returns the first intersecting block from the direction that this entity is looking at.
 *
 * @param options
 * Additional configuration options for the ray cast.
 * @returns Returns the first intersecting block from the direction that this entity is looking at.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 *
 * const raycast = skelly.getBlockFromViewDirection({ maxDistance: 8 });
 * const block = raycast?.block;
 * if (block) {
 *     console.warn(`Block: ${block.typeId}`);
 * };
 * ```
 */