import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

player.queueMusic("record.otherside", { loop: true });