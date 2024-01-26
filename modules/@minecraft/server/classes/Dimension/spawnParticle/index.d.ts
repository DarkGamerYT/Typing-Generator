/**
 * @remarks Creates a new particle emitter at a specified location in the world.
 *
 * This function can't be called in read-only mode.
 *
 * @param effectName
 * Identifier of the particle to create.
 * @param location
 * The location at which to create the particle emitter.
 * @param molangVariables
 * A set of optional, customizable variables that can be adjusted for this particle.
 * @throws This function can throw errors.
 *
 * {@link LocationInUnloadedChunkError}
 *
 * {@link LocationOutOfWorldBoundariesError}
 * @example
 * ```javascript
 * import { world, MolangVariableMap } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * const molang = new MolangVariableMap();
 * molang.setColorRGB("variable.color", {
 *     red: Math.random(),
 *     green: Math.random(),
 *     blue: Math.random(),
 *     alpha: 1
 * });
 * 
 * overworld.spawnParticle("minecraft:colored_flame_particle", { x: 1, y: 2, z: 3 }, molang);
 * ```
 */