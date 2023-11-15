/**
 * @remarks
 * Runs a particular command asynchronously from the context of
 * this entity. Note that there is a maximum queue of 128
 * asynchronous commands that can be run in a given tick.
 *
 * @param commandString
 * Command to run. Note that command strings should not start
 * with slash.
 * @returns
 * For commands that return data, returns a JSON structure with
 * command response values.
 * @throws This function can throw errors.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.runCommandAsync("say Hello World!");
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const entity = world.getDimension("overworld").getEntities()[0];
 * 
 * entity.runCommandAsync("say Hello World!");
 * ```
 */