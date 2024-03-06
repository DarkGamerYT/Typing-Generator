import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const creeper = overworld.spawnEntity("minecraft:creeper", location);
creeper.triggerEvent("minecraft:start_exploding_forced");