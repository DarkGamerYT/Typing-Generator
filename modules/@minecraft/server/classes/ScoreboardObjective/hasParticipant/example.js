import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

// Get the objective
const objective = world.scoreboard.getObjective("test");
console.warn(`Is Participant: ${objective.hasParticipant(player.scoreboardIdentity)}`);