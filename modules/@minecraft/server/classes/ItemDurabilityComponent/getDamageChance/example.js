import { ItemStack, ItemDurabilityComponent } from "@minecraft/server";
const itemStack = new ItemStack("minecraft:iron_sword");

const durability = itemStack.getComponent(ItemDurabilityComponent.componentId);
console.warn(`Damage chance: ${durability.getDamageChance(2)}`);