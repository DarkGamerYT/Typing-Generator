/**
 * @remarks
 * Sets the current active camera for the specified player.
 *
 * This function can't be called in read-only mode.
 *
 * @param cameraPreset
 * Identifier of a camera preset file defined within JSON.
 * @param setOptions
 * Additional options for the camera.
 * @throws This function can throw errors.
 * 
 * @example
 * ```javascript
 * import { world, system, EasingType } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * system.runInterval(() => {
 *  player.camera.setCamera("minecraft:free", {
 *      easeOptions: {
 *          easeTime: 0.75,
 *          easeType: EasingType.Linear
 *      },
 *      location: {
 *          x: player.location.x - 4,
 *          y: player.location.y + 8,
 *          z: player.location.z - 4
 *      },
 *      rotation: {
 *          x: 60,
 *          y: -135
 *      }
 *  });
 * });
 * ```
 */