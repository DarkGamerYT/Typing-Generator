/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { ModalFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new ModalFormData();
 * form.title("Test");
 * form.("Dropdown", [ "One", "Two" ], 1);
 * form.slider("Slider", 0, 10, 1, 5);
 * form.textField("Text Field", "Placeholder", "Hello World!");
 * form.toggle("Toggle", true);
 * 
 * form.show(player).then((response) => {
 *  console.warn(`Canceled: ${response.canceled}`);
 *  console.warn("Form Values:", response.formValues);
 * });
 * ```
 */