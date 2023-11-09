/**
 * @remarks
 * Set the action bar text - a piece of text that displays
 * beneath the title and above the hot-bar.
 *
 * This function can't be called in read-only mode.
 *
 * @param text
 * New value for the action bar text.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setActionBar("Hello World!");
 * ```
 * 
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setActionBar({ rawtext: [{ text: "Hello World!" }] });
 * ```
 */