import { world } from "@minecraft/server";

// Get the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

const sign = block.getComponent("sign");
sign.setText("Hello! :D");