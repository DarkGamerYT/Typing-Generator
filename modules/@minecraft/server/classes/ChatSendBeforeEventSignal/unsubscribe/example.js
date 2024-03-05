import { world } from "@minecraft/server";
const event = world.beforeEvents.chatSend.subscribe((data) => {
    data.sender.sendMessage("Hello, World!");

    // Unsubscribe from the event.
    world.beforeEvents.chatSend.unsubscribe(event);
});