/**
 * @remarks
 * Triggers an entity type event. For every entity, a number of
 * events are defined in an entities' definition for key entity
 * behaviors; for example, creepers have a
 * minecraft:start_exploding type event.
 *
 * This function can't be called in read-only mode.
 *
 * @param eventName
 * Name of the entity type event to trigger. If a namespace is
 * not specified, minecraft: is assumed.
 * @throws
 * If the event is not defined in the definition of the entity,
 * an error will be thrown.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const creeper = overworld.spawnEntity("minecraft:creeper", { x: 1, y: 2, z: 3 });
 *
 * creeper.triggerEvent("minecraft:start_exploding_forced");
 * ```
 */