import { EntityTypes } from "@minecraft/server";

const entityType = EntityTypes.get("minecraft:creeper");
console.warn(entityType.id);