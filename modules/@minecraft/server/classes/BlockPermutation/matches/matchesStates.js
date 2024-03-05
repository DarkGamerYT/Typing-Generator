import { world } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
const permutation = block.permutation;

const matches = permutation.matches("minecraft:oak_log", { direction: 1 });
console.warn(`Block matches: ${matches}`);