import { ItemStack } from "@minecraft/server";
const itemStack = new ItemStack("minecraft:iron_sword");

// Get the property value
const value = itemStack.getDynamicProperty("test");
console.warn(`Dynamic Property value: ${value}`);