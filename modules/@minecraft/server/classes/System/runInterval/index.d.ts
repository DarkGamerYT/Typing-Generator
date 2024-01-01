/**
 * @remarks Runs a set of code on an interval.
 *
 * @param callback
 * Functional code that will run when this interval occurs.
 * @param tickInterval
 * An interval of every N ticks that the callback will be called upon.
 * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
 * 
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * 
 * //Runs every 5 seconds
 * system.runInterval(() => {
 *     world.sendMessage(`Current tick: ${system.currentTick}`);
 * }, 100);
 * ```
 */