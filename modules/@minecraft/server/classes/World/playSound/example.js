import { world } from "@minecraft/server";

const location = { x: 0, y: 0, z: 0 };
world.playSound("bucket.fill_water", location, { pitch: 1.0, volume: 1.0 });