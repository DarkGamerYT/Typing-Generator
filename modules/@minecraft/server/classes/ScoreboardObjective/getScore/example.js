import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

// Get the objective
const objective = world.scoreboard.getObjective("test");
const score = objective.getScore(player.scoreboardIdentity) ?? 0;

console.warn(`Score: ${score}`);