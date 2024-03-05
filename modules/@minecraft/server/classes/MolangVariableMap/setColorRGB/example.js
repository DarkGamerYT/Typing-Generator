import { MolangVariableMap } from "@minecraft/server";

// Creates a new instance of the MolangVariableMap class
const molang = new MolangVariableMap();

// Random RGB color
molang.setColorRGB("variable.color", {
    red: Math.random(),
    green: Math.random(),
    blue: Math.random(),
});