import { ItemStack } from "@minecraft/server";

const item = new ItemStack("minecraft:diamond_shovel");
item.setCanDestroy([ "minecraft:dirt" ]);