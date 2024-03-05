import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];

player.sendMessage("Hello World!");
player.sendMessage({
    translate: "authentication.welcome",
    with: [ "Amazing Player 1" ]
});