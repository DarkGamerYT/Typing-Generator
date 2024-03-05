import { SignSide } from "@minecraft/server";

const sign = block.getComponent("sign");
sign.setText("Hello World", SignSide.Front);