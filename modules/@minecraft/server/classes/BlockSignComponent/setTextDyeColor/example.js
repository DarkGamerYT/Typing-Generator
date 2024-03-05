import { DyeColor, SignSide } from "@minecraft/server";

const sign = block.getComponent("minecraft:sign");
sign.setTextDyeColor(DyeColor.Lime, SignSide.Front);