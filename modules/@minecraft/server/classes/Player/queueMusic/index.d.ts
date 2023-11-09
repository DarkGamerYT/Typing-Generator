/**
 * @beta
 * @remarks
 * Queues an additional music track that only this particular
 * player can hear. If a track is not playing, a music track
 * will play.
 *
 * This function can't be called in read-only mode.
 *
 * @param trackId
 * Identifier of the music track to play.
 * @param musicOptions
 * Additional options for the music track.
 * @throws
 * An error will be thrown if volume is less than 0.0.
 * An error will be thrown if fade is less than 0.0.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * // Get the player
 * const player = world.getAllPlayers()[0];
 *
 * player.queueMusic("record.otherside", { loop: true });
 * ```
 */