import { world, system, TicksPerSecond } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const skelly = overworld.spawnEntity("minecraft:skeleton", location);
skelly.setOnFire(2 * TicksPerSecond, true);

system.runTimeout(() => {
    skelly.extinguishFire(true);
}, 1 * TicksPerSecond);