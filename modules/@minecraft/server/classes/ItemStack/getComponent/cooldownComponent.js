import { world, ItemStack, ItemCooldownComponent } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const itemStack = new ItemStack("minecraft:ender_pearl");
const cooldown = itemStack.getComponent(ItemCooldownComponent.componentId);
cooldown.startCooldown(player);