import { world } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const raycast = player.getBlockFromViewDirection({ maxDistance: 8 });
const block = raycast?.block;
if (block !== undefined) {
    console.warn(`Block: ${block.typeId}`);
};