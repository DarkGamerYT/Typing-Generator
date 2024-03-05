import { world, system, TicksPerSecond } from "@minecraft/server";

// Runs after 5 seconds
system.runTimeout(() => {
    world.sendMessage("Hello World!");
}, 5 * TicksPerSecond);