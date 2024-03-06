import { ItemStack } from "@minecraft/server";
const itemStack = new ItemStack("minecraft:iron_sword");

// Get the property value
const value = itemStack.getDynamicProperty("test") ?? 0;
itemStack.setDynamicProperty("test", value + 1);