import { world, system, TicksPerSecond, BlockPermutation } from "@minecraft/server";

const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "silver",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
];

let currentColor = 0;
let interval = system.runInterval(() => {
    if (currentColor > colors.length - 1) {
        system.clearRun(interval);
        return;
    };
 
    const permutation = BlockPermutation.resolve("minecraft:wool", { color: colors[currentColor] });
    block.setPermutation(permutation);
    currentColor++;
}, 1 * TicksPerSecond);