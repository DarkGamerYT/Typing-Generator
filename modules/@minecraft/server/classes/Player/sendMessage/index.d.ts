/**
 * @beta
 * @remarks
 * Sends a message to the player.
 *
 * @param message
 * The message to be displayed.
 * @throws
 * This method can throw if the provided {@link RawMessage} is
 * in an invalid format. For example, if an empty `name` string
 * is provided to `score`.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * // Displays "Apple or Coal"
 * let rawMessage = {
 *   translate: "accessibility.list.or.two",
 *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
 * };
 * 
 * player.sendMessage(rawMessage);
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * // Displays the player's score for objective "obj". Each player will see their own score.
 * const rawMessage = { score: { name: "*", objective: "obj" } };
 * player.sendMessage(rawMessage);
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.sendMessage("Hello World!");
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * 
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
 * ```
 */