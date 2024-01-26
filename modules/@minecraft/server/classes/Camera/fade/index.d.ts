/**
 * @remarks
 * Begins a camera fade transition.
 * A fade transition is a full-screen color that fades-in, holds, and then fades-out.
 *
 * This function can't be called in read-only mode.
 *
 * @param fadeCameraOptions
 * Additional options around camera fade operations.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.camera.fade({
 *     fadeColor: { red: 0.0, green: 0.0, blue: 0.0 },
 *     fadeTime: {
 *         fadeInTime: 0.25,
 *         holdTime: 1.5,
 *         fadeOutTime: 0.25
 *     }
 * });
 * ```
 */