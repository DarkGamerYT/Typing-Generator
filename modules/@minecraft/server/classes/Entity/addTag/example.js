import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const mobs = [ "minecraft:creeper", "minecraft:skeleton", "minecraft:sheep" ];

// Create some sample mob data
for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const location = { x: 1, y: 2, z: 3 };

    const entity = overworld.spawnEntity(mobTypeId, location);
    entity.addTag("mobparty." + mobTypeId.replace("minecraft:", ""));
};

const entities = overworld.getEntities({ tags: [ "mobparty.skeleton" ] });
for (const entity of entities) entity.kill();