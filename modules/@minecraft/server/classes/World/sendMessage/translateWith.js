import { world } from "@minecraft/server";

world.sendMessage("Hello World!");
world.sendMessage({
    translate: "authentication.welcome",
    with: [ "Amazing Player 1" ]
});