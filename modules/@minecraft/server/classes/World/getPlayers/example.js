import { world } from "@minecraft/server";

const playersWithTag = world.getPlayers({ tags: [ "helloworld" ] });
console.warn(playersWithTag.length);