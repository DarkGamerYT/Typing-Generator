import { world, EntityHealthComponent } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const location = { x: 1, y: 2, z: 3 };

const skelly = overworld.spawnEntity("minecraft:skeleton", location);
const health = skelly.getComponent(EntityHealthComponent.componentId);

// Resets health to it's default value
health.resetToDefaultValue();

// Sets the entity's health to 1
health.setCurrentValue(1);