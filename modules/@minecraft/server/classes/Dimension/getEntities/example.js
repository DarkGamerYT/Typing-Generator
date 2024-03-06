import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const entities = overworld.getEntities({ type: "minecraft:pig" });
console.warn(`Entities: ${entities.length}`);