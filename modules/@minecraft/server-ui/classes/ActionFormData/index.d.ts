/**
 * Builds a simple player form with buttons that let the player take action.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { ActionFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new ActionFormData();
 * form.title("Test");
 * form.body("Hello World!");
 * form.button("Button 1");
 * form.button("Button 2", "textures/items/diamond_sword");
 * 
 * form.show(player).then((response) => {
 *     console.warn(`Canceled: ${response.canceled}`);
 *     console.warn(`Selection: ${response.selection}`);
 * });
 * ```
 */