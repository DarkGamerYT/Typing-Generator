import { world } from "@minecraft/server";
world.beforeEvents.chatSend.subscribe((data) => {
    if (!data.message.startsWith("!")) return;
    data.cancel = true;

    const command = data.message.split(" ")[0].slice(1);
    const args = data.message.slice(command.length + 1).trim().split(" ");
    switch(command) {
        // !test
        case "test":
            data.sender.sendMessage("Hello, World!");
        break;
    };
});