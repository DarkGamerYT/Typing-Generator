import { world, system, TicksPerSecond } from "@minecraft/server";
const player = world.getAllPlayers()[0];

player.onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
});

let countdown = 10;
let interval = system.runInterval(() => {
    countdown--;
    player.onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) system.clearRun(interval);
}, 1 * TicksPerSecond);