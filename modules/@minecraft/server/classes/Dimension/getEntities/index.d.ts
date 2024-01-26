/**
 * @remarks Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
 *
 * @param options
 * Additional options that can be used to filter the set of entities returned.
 * @returns An entity array.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * const entities = overworld.getEntities({ type: "minecraft:pig" });
 * for (let entity of entities) {
 *     entity.remove();
 * };
 * ```
 */