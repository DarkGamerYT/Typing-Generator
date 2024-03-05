import { DimensionTypes } from "@minecraft/server";

const dimensionType = DimensionTypes.get("overworld");
console.warn(dimensionType.typeId);