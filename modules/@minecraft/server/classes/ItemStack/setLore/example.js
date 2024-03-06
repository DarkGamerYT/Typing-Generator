import { ItemStack } from "@minecraft/server";

const itemStack = new ItemStack("minecraft:dirt", 8);
itemStack.setLore([ "Hello,", "World!" ]);