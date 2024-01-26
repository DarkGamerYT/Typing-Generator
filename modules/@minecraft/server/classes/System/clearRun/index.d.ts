/**
 * @remarks Cancels the execution of a function run that was previously scheduled via the `run` function.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * 
 * const run = system.runInterval(() => {
 *     world.sendMessage("Hello World!");
 *  
 *     //Clears the run
 *     system.clearRun(run);
 * }, 100);
 * ```
 */