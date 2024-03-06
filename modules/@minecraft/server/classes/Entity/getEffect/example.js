import { world, TicksPerSecond } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const skelly = overworld.spawnEntity("minecraft:skeleton", location);
skelly.addEffect("speed", 5 * TicksPerSecond, { amplifier: 2 });

const effect = skelly.getEffect("speed");
console.warn(`Effect: ${effect.displayName} ${effect.amplifier} - ${effect.duration / TicksPerSecond}s left`);