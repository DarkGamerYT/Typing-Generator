import { world, SignSide, BlockSignComponent } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

// Get the block
const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
const signComponent = block.getComponent(BlockSignComponent.componentId);

const color = signComponent.getTextDyeColor(SignSide.Front);
console.warn(color); // "Lime"