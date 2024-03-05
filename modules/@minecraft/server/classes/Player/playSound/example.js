import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

player.playSound("bucket.fill_water", { pitch: 1.0, volume: 1.0 });