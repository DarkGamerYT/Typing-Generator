import { ItemStack } from "@minecraft/server";

const item = new ItemStack("minecraft:iron_sword");
const durability = item.getComponent("minecraft:durability");
console.warn(`Damage: ${durability.damage}`);