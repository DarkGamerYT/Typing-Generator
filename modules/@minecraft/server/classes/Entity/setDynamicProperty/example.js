import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

// Get the property value
const value = player.getDynamicProperty("test") ?? 0;
player.setDynamicProperty("test", value + 1);