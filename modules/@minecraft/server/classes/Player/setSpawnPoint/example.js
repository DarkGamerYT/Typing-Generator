import { world } from "@minecraft/server";

// Get the player
const player = world.getAllPlayers()[0];
const dimension = world.getDimension("the_end");

player.setSpawnPoint({ x: 0, y: 60, z: 0, dimension });