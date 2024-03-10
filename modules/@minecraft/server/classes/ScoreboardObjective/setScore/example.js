import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

// Get the objective
const objective = world.scoreboard.getObjective("test");
objective.setScore(player.scoreboardIdentity, 1);