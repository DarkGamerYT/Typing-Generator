import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.onScreenDisplay.setActionBar({ rawtext: [{ text: "Hello World!" }] });