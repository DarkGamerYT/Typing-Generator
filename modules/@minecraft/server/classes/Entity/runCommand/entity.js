import { world } from "@minecraft/server";
const entity = world.getDimension("overworld").getEntities()[0];

const command = entity.runCommand("say Hello World!");
console.warn(`Success count: ${command.successCount}`);