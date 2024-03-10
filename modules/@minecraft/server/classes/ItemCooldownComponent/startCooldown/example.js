import { ItemStack, ItemCooldownComponent } from "@minecraft/server";
const itemStack = new ItemStack("minecraft:ender_pearl");

const cooldown = itemStack.getComponent(ItemCooldownComponent.componentId);
cooldown.startCooldown(player);