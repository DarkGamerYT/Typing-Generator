/**
 * @remarks Runs a command synchronously using the context of the broader dimenion.
 *
 * This function can't be called in read-only mode.
 *
 * @param commandString
 * Command to run. Note that command strings should not start with slash.
 * @returns Returns a command result with a count of successful values from the command.
 * @throws
 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
 * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
 *
 * {@link CommandError}
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * overworld.runCommand("say Hello World!");
 * ```
 */