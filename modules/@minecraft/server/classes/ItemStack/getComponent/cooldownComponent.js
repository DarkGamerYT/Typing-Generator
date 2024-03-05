import { world, ItemStack } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const item = new ItemStack("minecraft:ender_pearl");
const cooldown = item.getComponent("minecraft:cooldown");
cooldown.startCooldown(player);