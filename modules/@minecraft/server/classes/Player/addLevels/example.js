import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

const level = player.addLevels(1);
console.warn(`Player's current level: ${level}`);