import { world, ItemStack } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

const inventory = block.getComponent("inventory").container;
inventory.addItem(new ItemStack("minecraft:dirt"));