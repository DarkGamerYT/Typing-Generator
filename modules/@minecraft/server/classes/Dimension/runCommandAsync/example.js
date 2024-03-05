import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

overworld.runCommandAsync("say Hello World!").then((command) => {
    console.warn(`Success count: ${command.successCount}`);
});