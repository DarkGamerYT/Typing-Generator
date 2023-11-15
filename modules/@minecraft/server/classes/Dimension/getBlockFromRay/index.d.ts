/**
 * @remarks
 * Gets the first block that intersects with a vector emanating
 * from a location.
 *
 * @param location
 * Location from where to initiate the ray check.
 * @param direction
 * Vector direction to cast the ray.
 * @param options
 * Additional options for processing this raycast query.
 * 
 * @example
 * ```javascript
 * import { world, Vector } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * const ray = overworld.getBlockFromRay({ x: 1, y: 2, z: 3}, Vector.Down);
 * console.warn(`Block: ${ray?.block?.typeId}`);
 * console.warn(`Face: ${ray?.face}`);
 * ```
 */