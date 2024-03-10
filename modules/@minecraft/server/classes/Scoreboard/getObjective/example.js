import { world } from "@minecraft/server";

// Get the objective
const objective = world.scoreboard.getObjective("test");
console.warn(objective.id);