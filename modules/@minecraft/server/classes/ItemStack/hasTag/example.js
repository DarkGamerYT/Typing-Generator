import { ItemStack } from "@minecraft/server";
const itemStack = new ItemStack("minecraft:iron_pickaxe");

console.warn(`Item is pickaxe: ${itemStack.hasTag("minecraft:is_pickaxe")}`);
console.warn(`Item is iron tier: ${itemStack.hasTag("minecraft:iron_tier")}`);