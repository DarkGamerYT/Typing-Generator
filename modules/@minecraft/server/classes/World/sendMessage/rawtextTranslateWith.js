import { world } from "@minecraft/server";

// Displays "Apple or Coal"
world.sendMessage({
    translate: "accessibility.list.or.two",
    with: {
        rawtext: [
            { translate: "item.apple.name" },
            { translate: "item.coal.name" }
        ]
    },
});