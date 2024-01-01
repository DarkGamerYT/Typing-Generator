/**
 * @remarks Runs a set of code at a future time specified by tickDelay.
 *
 * @param callback
 * Functional code that will run when this timeout occurs.
 * @param tickDelay
 * Amount of time, in ticks, before the interval will be called.
 * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * 
 * //Runs after 5 seconds
 * system.runTimeout(() => {
 *     world.sendMessage("Hello World!");
 * }, 100);
 * ```
 */