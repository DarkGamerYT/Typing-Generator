import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const skelly = overworld.spawnEntity("minecraft:skeleton", location);
skelly.applyDamage(19); // Skeletons have max damage of 20 so this is a near-death skeleton