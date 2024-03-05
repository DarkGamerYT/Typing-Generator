import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.camera.fade({
    fadeColor: { red: 0.0, green: 0.0, blue: 0.0 },
    fadeTime: {
        fadeInTime: 0.25,
        holdTime: 1.5,
        fadeOutTime: 0.25,
    },
});