import { world } from "@minecraft/server";

const players = world.getAllPlayers();
console.warn(players.length);