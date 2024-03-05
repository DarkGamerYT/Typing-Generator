import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];

// Displays the player's score for objective "obj". Each player will see their own score.
player.sendMessage({
    score: { name: "*", objective: "obj" },
});