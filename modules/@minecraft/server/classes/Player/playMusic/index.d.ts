/**
 * @beta
 * @remarks
 * Plays a music track that only this particular player can
 * hear.
 *
 * This function can't be called in read-only mode.
 *
 * @param trackId
 * Identifier of the music track to play.
 * @param musicOptions
 * Additional options for the music track.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.playMusic("record.otherside", { loop: true });
 * ```
 */