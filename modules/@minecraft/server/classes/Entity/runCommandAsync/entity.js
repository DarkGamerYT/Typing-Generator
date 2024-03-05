import { world } from "@minecraft/server";
const entity = world.getDimension("overworld").getEntities()[0];

entity.runCommandAsync("say Hello World!").then((command) => {
    console.warn(`Success count: ${command.successCount}`);
});;