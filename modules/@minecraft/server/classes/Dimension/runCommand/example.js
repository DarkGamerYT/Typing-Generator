import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const command = overworld.runCommand("say Hello World!");
console.warn(`Success count: ${command.successCount}`);