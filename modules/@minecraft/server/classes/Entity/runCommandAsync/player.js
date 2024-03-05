import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.runCommandAsync("say Hello World!").then((command) => {
    console.warn(`Success count: ${command.successCount}`);
});;