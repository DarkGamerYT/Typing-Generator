import { SignSide } from "@minecraft/server";

const sign = block.getComponent("minecraft:sign");
const text = sign.getRawText(SignSide.Front);
console.warn(JSON.stringify(text)); // "{\"rawtext\":[{\"text\":\"Hello World\"}]}"