import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const zombie = overworld.spawnEntity("minecraft:zombie", location);
zombie.clearVelocity();
zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); // Throws the zombie up in the air