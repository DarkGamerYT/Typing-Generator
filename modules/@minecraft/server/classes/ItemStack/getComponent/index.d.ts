/**
 * @remarks Gets a component (that represents additional capabilities) for an item stack.
 *
 * @param componentId
 * The identifier of the component (e.g., 'minecraft:food').
 * If no namespace prefix is specified, 'minecraft:' is assumed.
 * Available component IDs can be found as part of the {@link ItemComponentTypes} enum.
 * @returns Returns the component if it exists on the item stack, otherwise undefined.
 * @example
 * ```javascript
 * import { ItemStack } from "@minecraft/server";
 * 
 * const item = new ItemStack("minecraft:iron_sword");
 * const durability = item.getComponent("minecraft:durability");
 * console.warn(`Damage: ${durability.damage}`);
 * ```
 * @example
 * ```javascript
 * import { world, ItemStack } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * const item = new ItemStack("minecraft:ender_pearl");
 * const cooldown = item.getComponent("minecraft:cooldown");
 * cooldown.startCooldown(player);
 * ```
 * @example
 * ```javascript
 * import { ItemStack, Enchantment } from "@minecraft/server";
 * 
 * const item = new ItemStack("minecraft:iron_sword");
 * const enchantments = item.getComponent("minecraft:enchantments");
 * enchantments.enchantments.addEnchantment(new Enchantment("sharpness", 5));
 * ```
 */