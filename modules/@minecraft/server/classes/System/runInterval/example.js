import { world, system, TicksPerSecond } from "@minecraft/server";

// Runs every 5 seconds
system.runInterval(() => {
    world.sendMessage("Hello World!");
}, 5 * TicksPerSecond);