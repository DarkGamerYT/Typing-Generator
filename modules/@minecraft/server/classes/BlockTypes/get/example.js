import { BlockTypes } from "@minecraft/server";

const blockType = BlockTypes.get("minecraft:dirt");
console.warn(blockType.id);