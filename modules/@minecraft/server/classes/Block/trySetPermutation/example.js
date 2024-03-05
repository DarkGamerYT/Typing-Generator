import { world, BlockPermutation } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

block.trySetPermutation(BlockPermutation.resolve("minecraft:dirt"));