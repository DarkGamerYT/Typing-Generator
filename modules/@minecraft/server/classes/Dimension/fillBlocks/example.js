import { world, BlockPermutation } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const from = { x: 0, y: 0, z: 0 };
const to = { x: 10, y: 10, z: 10 };
overworld.fillBlocks(from, to, "minecraft:iron_block", {
    matchingBlocks: BlockPermutation.resolve("minecraft:dirt")
});