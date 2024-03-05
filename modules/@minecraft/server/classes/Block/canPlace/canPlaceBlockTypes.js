import { world, BlockTypes, Direction } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

const canPlace = block.canPlace(BlockTypes.get("minecraft:dirt"), Direction.Up);
console.warn(`Can place on dirt: ${canPlace}`);