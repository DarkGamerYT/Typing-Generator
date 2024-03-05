import { MolangVariableMap } from "@minecraft/server";

// Creates a new instance of the MolangVariableMap class
const molang = new MolangVariableMap();
molang.setColorRGBA("variable.color", {
    red: Math.random(),
    green: Math.random(),
    blue: Math.random(),
    alpha: 1,
});