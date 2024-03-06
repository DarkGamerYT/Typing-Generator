import { world } from "@minecraft/server";

// Get the property value
const value = world.getDynamicProperty("test") ?? 0;
world.setDynamicProperty("test", value + 1);