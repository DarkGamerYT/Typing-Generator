import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const command = player.runCommand("say Hello World!");
console.warn(`Success count: ${command.successCount}`);