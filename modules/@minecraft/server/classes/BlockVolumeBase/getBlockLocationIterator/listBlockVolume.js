import { world, ListBlockVolume } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

const volume = new ListBlockVolume([
    { x: -5, y: -5, z: -5 },
    { x: 5, y: 5, z: 5 }
]);

const blockLocations = volume.getBlockLocationIterator();
for (let i = 0; i < blockLocations.length; i++) {
    const blockLocation = blockLocations[0];
    const block = overworld.getBlock(blockLocation);
    
    block.setType("minecraft:dirt");
};