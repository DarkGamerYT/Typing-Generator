import { SignSide } from "@minecraft/server";

const sign = block.getComponent("minecraft:sign");
const color = sign.getTextDyeColor(SignSide.Front);
console.warn(color);