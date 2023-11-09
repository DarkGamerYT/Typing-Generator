/**
 * @remarks
 * Updates the subtitle if the subtitle was previously
 * displayed via the setTitle method.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setTitle("Get ready!", {
 *  stayDuration: 220,
 *  fadeInDuration: 2,
 *  fadeOutDuration: 4,
 *  subtitle: "10",
 * });
 * 
 * let countdown = 10;
 * let interval = system.runInterval(() => {
 *  countdown--;
 *  player.onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *  if (countdown == 0) system.clearRun(interval);
 * }, 20);
 * ```
 * 
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setTitle({ rawtext: [{ text: "Get ready!" }] }, {
 *  stayDuration: 220,
 *  fadeInDuration: 2,
 *  fadeOutDuration: 4,
 *  subtitle: { text: "10" },
 * });
 * 
 * let countdown = 10;
 * let interval = system.runInterval(() => {
 *  countdown--;
 *  player.onScreenDisplay.updateSubtitle({ rawtext: [{ text: countdown.toString() }] });
 *
 *  if (countdown == 0) system.clearRun(interval);
 * }, 20);
 * ```
 */