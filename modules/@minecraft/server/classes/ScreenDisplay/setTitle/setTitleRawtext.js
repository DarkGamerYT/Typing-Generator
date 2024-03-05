import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.onScreenDisplay.setTitle({ rawtext: [{ text: "Hello World!" }] });