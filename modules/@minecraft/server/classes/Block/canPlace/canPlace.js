import { world, Direction } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

const canPlace = block.canPlace("minecraft:dirt", Direction.Up);
console.warn(`Can place on dirt: ${canPlace}`);