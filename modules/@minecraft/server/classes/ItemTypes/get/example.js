import { ItemTypes } from "@minecraft/server";

const itemType = ItemTypes.get("minecraft:iron_sword");
console.warn(itemType.id);