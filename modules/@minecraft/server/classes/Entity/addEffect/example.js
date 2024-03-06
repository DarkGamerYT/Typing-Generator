import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const fox = overworld.spawnEntity("minecraft:fox", location);
fox.addEffect("speed", 10, { amplifier: 2 });