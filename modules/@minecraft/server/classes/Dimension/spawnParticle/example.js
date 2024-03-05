import { world, MolangVariableMap } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const molang = new MolangVariableMap();
molang.setColorRGB("variable.color", {
    red: Math.random(),
    green: Math.random(),
    blue: Math.random(),
    alpha: 1
});

overworld.spawnParticle("minecraft:colored_flame_particle", { x: 1, y: 2, z: 3 }, molang);