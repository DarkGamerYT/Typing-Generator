import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

//Creates an explosion that causes fire
overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { causesFire: true });

//Creates an explosion that breaks blocks
overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { breaksBlocks: true });

//Creates an explosion that can go underwater
overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { allowUnderwater: true });