import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.onScreenDisplay.setTitle("Hello World!");