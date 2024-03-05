import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const dirtItem = new ItemStack("minecraft:dirt", 1);
overworld.spawnItem(dirtItem, { x: 1, y: 2, z: 3 });