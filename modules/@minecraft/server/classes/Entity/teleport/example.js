import { TicksPerSecond, world } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");
const location = { x: 0, y: 0, z: 0 };

const pig = overworld.spawnEntity("minecraft:pig", location);
system.runTimeout(() => {
    if (pig.isValid() !== false) {
        pig.teleport({ x: 1, y: 2, z: 3 });
    };
}, 5 * TicksPerSecond);