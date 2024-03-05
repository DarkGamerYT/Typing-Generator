import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

const xp = player.addExperience(1);
console.warn(`XP: ${xp}`);