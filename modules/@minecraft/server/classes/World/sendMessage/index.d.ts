/**
 * @remarks Sends a message to all players.
 *
 * @param message
 * The message to be displayed.
 * @throws
 * This method can throw if the provided {@link RawMessage} is in an invalid format.
 * For example, if an empty `name` string is provided to `score`.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Displays "Apple or Coal"
 * let rawMessage = {
 *     translate: "accessibility.list.or.two",
 *     with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
 * };
 *
 * world.sendMessage(rawMessage);
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Displays the player's score for objective "obj". Each player will see their own score.
 * const rawMessage = { score: { name: "*", objective: "obj" } };
 * world.sendMessage(rawMessage);
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * world.sendMessage("Hello World!");
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * world.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
 * ```
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * world.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
 * ```
 */