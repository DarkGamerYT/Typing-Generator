/**
 * @remarks Adds a callback that will be called before new chat messages are sent.
 *
 * This function can't be called in read-only mode.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * world.beforeEvents.chatSend.subscribe((data) => {
 *     if (!data.message.startsWith("!")) return;
 *     data.cancel = true;
 * 
 *     const command = data.message.split(" ")[0].slice(1);
 *     const args = data.message.slice(command.length).trim().split(" ");
 *     switch(command) {
 *         // !test
 *         case "test":
 *             data.sender.sendMessage("Hello World!");
 *         break;
 *     };
 * });
 * ```
 */