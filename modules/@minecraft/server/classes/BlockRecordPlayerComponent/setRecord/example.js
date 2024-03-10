import { world, BlockRecordPlayerComponent } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

// Get the block
const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
const recordPlayerComponent = block.getComponent(BlockRecordPlayerComponent.componentId);

recordPlayerComponent.setRecord("minecraft:music_disc_otherside");