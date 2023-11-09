/**
 * @beta
 * @remarks
 * Plays a particular music track for all players.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * world.playMusic("record.otherside", { loop: true });
 * ```
 */