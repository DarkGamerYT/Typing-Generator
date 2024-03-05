import { world } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

console.warn(`Block is dirt: ${block.hasTag("dirt")}`);
console.warn(`Block is wood: ${block.hasTag("wood")}`);
console.warn(`Block is stone: ${block.hasTag("stone")}`);