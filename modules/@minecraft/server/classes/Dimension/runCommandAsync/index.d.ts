/**
 * @remarks
 * Runs a particular command asynchronously from the context of the broader dimension.
 * Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
 *
 * @param commandString
 * Command to run.
 * Note that command strings should not start with slash.
 * @returns For commands that return data, returns a CommandResult with an indicator of command results.
 * @throws
 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
 * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * overworld.runCommandAsync("say Hello World!");
 * ```
 */