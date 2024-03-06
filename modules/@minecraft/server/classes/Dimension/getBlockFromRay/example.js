import { world, Vector } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const ray = overworld.getBlockFromRay({ x: 1, y: 2, z: 3}, Vector.Down);
console.warn(`Block: ${ray?.block?.typeId}`);
console.warn(`Face: ${ray?.face}`);