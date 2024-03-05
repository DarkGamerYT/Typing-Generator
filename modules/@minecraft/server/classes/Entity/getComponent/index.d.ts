/**
 * @remarks Gets a component (that represents additional capabilities) for an entity.
 *
 * @param componentId
 * The identifier of the component (e.g., 'minecraft:health').
 * If no namespace prefix is specified, 'minecraft:' is assumed.
 * Available component IDs can be found as part of the {@link EntityComponentTypes} enum.
 * @returns Returns the component if it exists on the entity, otherwise undefined.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 *
 * const inventory = player.getComponent("inventory");
 * const container = inventory.container;
 * 
 * container.addItem(new ItemStack("minecraft:dirt"));
 * container.setItem(8, new ItemStack("minecraft:dirt"));
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
 *
 * const health = skelly.getComponent("health");
 * 
 * //Reset health to it's default value
 * health.resetToDefaultValue();
 * 
 * //Set the entity's health to 1
 * health.setCurrentValue(1);
 * ```
 */