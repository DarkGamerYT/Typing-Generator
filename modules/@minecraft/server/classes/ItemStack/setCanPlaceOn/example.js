import { ItemStack } from "@minecraft/server";

const item = new ItemStack("minecraft:dirt", 8);
item.setCanPlaceOn([ "minecraft:dirt" ]);