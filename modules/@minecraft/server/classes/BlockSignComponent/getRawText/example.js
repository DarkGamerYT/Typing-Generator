import { world, SignSide, BlockSignComponent } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

// Get the block
const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
const signComponent = block.getComponent(BlockSignComponent.componentId);

const text = signComponent.getRawText(SignSide.Front);
console.warn(JSON.stringify(text)); // "{\"text\":\"Hello World\"}"