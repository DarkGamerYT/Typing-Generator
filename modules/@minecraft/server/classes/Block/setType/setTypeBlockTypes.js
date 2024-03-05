import { world, BlockTypes } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

block.setType(BlockTypes.get("minecraft:dirt"));