import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });