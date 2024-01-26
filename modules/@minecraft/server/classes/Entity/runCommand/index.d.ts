/**
 * @remarks Runs a synchronous command on the entity.
 *
 * This function can't be called in read-only mode.
 *
 * @param commandString
 * The command string.
 * Note: This should not include a leading forward slash.
 * @returns A command result containing whether the command was successful.
 * @throws This function can throw errors.
 *
 * {@link CommandError}
 *
 * {@link Error}
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.runCommand("say Hello World!");
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const entity = world.getDimension("overworld").getEntities()[0];
 * 
 * entity.runCommand("say Hello World!");
 * ```
 */