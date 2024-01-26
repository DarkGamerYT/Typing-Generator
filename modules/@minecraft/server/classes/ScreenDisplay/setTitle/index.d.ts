/**
 * @remarks
 * Will cause a title to show up on the player's on screen display.
 * Will clear the title if set to empty string.
 * You can optionally specify an additional subtitle as well as fade in, stay and fade out times.
 *
 * This function can't be called in read-only mode.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setTitle("Hello World!");
 * ```
 * @example
 * ```javascript
 * import { world, system } from "@minecraft/server";
 * const player = world.getAllPlayers()[0];
 * 
 * player.onScreenDisplay.setTitle({ rawtext: [{ text: "Hello World!" }] });
 * ```
 */