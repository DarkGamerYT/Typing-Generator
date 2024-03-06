import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const mobs = [ "minecraft:creeper", "minecraft:skeleton", "minecraft:sheep" ];

// create some sample mob data
for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const location = { x: 1, y: 2, z: 3 };
    overworld.spawnEntity(mobTypeId, location);
};

const entities = overworld.getEntities({ type: "skeleton" });
for (const entity of entities) {
    entity.applyKnockback(0, 0, 0, 1);
};