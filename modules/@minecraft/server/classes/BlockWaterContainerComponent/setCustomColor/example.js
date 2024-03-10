import { world, BlockWaterContainerComponent } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

// Get the block
const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
const waterContainerComponent = block.getComponent(BlockWaterContainerComponent.componentId);

waterContainerComponent.setCustomColor({
    red: Math.random(),
    green: Math.random(),
    blue: Math.random(),
    alpha: 1.0
});