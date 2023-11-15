/**
 * Builds a simple two-button modal dialog.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { MessageFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new MessageFormData();
 * form.title("Test");
 * form.body("Hello World!");
 * form.button1("Button 1");
 * form.button2("Button 2");
 * 
 * form.show(player).then((response) => {
 *  console.warn(`Canceled: ${response.canceled}`);
 *  console.warn(`Selection: ${response.selection}`);
 * });
 * ```
 */