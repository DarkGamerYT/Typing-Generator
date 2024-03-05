import { SignSide } from "@minecraft/server";

const sign = block.getComponent("minecraft:sign");
const helloWorldMessage = { rawtext: [{ text: "Hello World" }] };
sign.setText(helloWorldMessage, SignSide.Front);