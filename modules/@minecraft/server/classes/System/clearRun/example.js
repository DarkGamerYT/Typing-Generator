import { world, system, TicksPerSecond } from "@minecraft/server";

const run = system.runInterval(() => {
    world.sendMessage("Hello World!");
 
    // Clears the run
    system.clearRun(run);
}, 5 * TicksPerSecond);