import { world } from "@minecraft/server";

// Get the property value
const value = world.getDynamicProperty("test");
console.warn(`Dynamic Property value: ${value}`);