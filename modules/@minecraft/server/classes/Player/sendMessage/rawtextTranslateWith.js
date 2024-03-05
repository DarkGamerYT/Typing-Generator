import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];

// Displays "Apple or Coal"
player.sendMessage({
    translate: "accessibility.list.or.two",
    with: {
        rawtext: [
            { translate: "item.apple.name" },
            { translate: "item.coal.name" }
        ]
    },
});