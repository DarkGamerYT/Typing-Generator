import { world, GameMode } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];

player.setGameMode(GameMode.spectator);