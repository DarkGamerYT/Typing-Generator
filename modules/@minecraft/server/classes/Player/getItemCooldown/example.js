import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

console.warn(`Item cooldown: ${player.getItemCooldown("ender_pearl")}`);