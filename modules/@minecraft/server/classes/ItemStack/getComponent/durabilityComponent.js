import { ItemStack } from "@minecraft/server";

const itemStack = new ItemStack("minecraft:iron_sword");
const durability = itemStack.getComponent("minecraft:durability");
console.warn(`Damage: ${durability.damage}`);