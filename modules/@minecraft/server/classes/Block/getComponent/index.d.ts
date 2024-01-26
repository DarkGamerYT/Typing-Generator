/**
 * @remarks
 * Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.
 *
 * @param componentId
 * The identifier of the component (e.g., 'minecraft:inventory').
 * If no namespace prefix is specified, 'minecraft:' is assumed.
 * Available component IDs can be found as part of the {@link BlockComponentTypes} enum.
 * @returns Returns the component if it exists on the block, otherwise undefined.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world, ItemStack } from "@minecraft/server";
 *
 * // Fetch the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * const inventory = block.getComponent("inventory").container;
 * inventory.addItem(new ItemStack("minecraft:dirt"));
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Fetch the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * const sign = block.getComponent("sign");
 * sign.setText("Hello! :D");
 * ```
 */