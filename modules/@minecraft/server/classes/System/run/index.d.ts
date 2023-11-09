/**
 * @remarks
 * Runs a specified function at a future time. This is
 * frequently used to implement delayed behaviors and game
 * loops.
 *
 * @param callback
 * Function callback to run when the tickDelay time criteria is
 * met.
 * @returns
 * An opaque identifier that can be used with the `clearRun`
 * function to cancel the execution of this run.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * 
 * function helloWorld() {
 *  world.sendMessage("Hello World");
 *  system.run(helloWorld);
 * };
 * 
 * system.run(() => {
 *  world.sendMessage(":D");
 *  helloWorld();
 * });
 * ```
 */