import { world, ItemStack, BlockInventoryComponent } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

// Get the block
const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
const container = block.getComponent(BlockInventoryComponent.componentId).container;

container.addItem(new ItemStack("minecraft:dirt"));