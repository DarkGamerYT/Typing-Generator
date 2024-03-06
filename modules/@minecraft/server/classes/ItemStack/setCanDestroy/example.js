import { ItemStack } from "@minecraft/server";

const itemStack = new ItemStack("minecraft:diamond_shovel");
itemStack.setCanDestroy([ "minecraft:dirt" ]);