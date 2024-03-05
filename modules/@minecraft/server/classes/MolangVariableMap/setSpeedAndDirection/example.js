import { MolangVariableMap, Vector } from "@minecraft/server";

// Creates a new instance of the MolangVariableMap class
const molang = new MolangVariableMap();
molang.setSpeedAndDirection("variable.custom", 2, Vector.forward);