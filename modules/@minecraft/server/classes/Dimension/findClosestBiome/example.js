import { world, BiomeTypes } from "@minecraft/server";
const overworld = world.getDimension("overworld");

const player = world.getAllPlayers()[0];
const biome = BiomeTypes.get("cherry_grove");
const biomeLocation = overworld.findClosestBiome(player.location, biome);

player.teleport(biomeLocation);