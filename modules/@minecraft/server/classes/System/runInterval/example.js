import { world, system, TicksPerSecond } from "@minecraft/server";

// Runs every 5 seconds
system.runInterval(() => {
    world.sendMessage(`Current tick: ${system.currentTick}`);
}, 5 * TicksPerSecond);