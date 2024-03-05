import { SignSide } from "@minecraft/server";

const sign = block.getComponent("minecraft:sign");
const text = sign.getText(SignSide.Front);
console.warn(text);