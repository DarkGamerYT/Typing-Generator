import { world, BlockVolume } from "@minecraft/server";
const overworld = world.getDimension("minecraft:overworld");

const from = { x: -5, y: -5, z: -5 };
const to = { x: 5, y: 5, z: 5 };
const volume = new BlockVolume(from, to);

const blockLocations = volume.getBlockLocationIterator();
for (let i = 0; i < blockLocations.length; i++) {
    const blockLocation = blockLocations[0];
    const block = overworld.getBlock(blockLocation);
    if (volume.doesLocationTouchFaces(blockLocation)) {
        block.setType("minecraft:dirt");
    } else {
        block.setType("minecraft:stone");
    };
};