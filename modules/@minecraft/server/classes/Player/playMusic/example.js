import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

player.playMusic("record.otherside", { loop: true });