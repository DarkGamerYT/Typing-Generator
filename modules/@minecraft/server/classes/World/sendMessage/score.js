import { world } from "@minecraft/server";

// Displays the player's score for objective "obj". Each player will see their own score.
world.sendMessage({
    score: { name: "*", objective: "obj" },
});