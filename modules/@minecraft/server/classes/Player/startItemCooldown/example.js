import { world, TicksPerSecond } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

// Starts an item cooldown for the ender pearl for 5 seconds
player.startItemCooldown("ender_pearl", 5 * TicksPerSecond);