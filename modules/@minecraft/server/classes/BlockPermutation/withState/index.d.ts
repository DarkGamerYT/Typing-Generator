/**
 * @beta
 * @remarks Returns a derived BlockPermutation with a specific property set.
 *
 * @param name
 * Identifier of the block property.
 * @param value
 * Value of the block property.
 * @throws This function can throw errors.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * const permutation = block.permutation;
 * 
 * const newPermutation = permutation.withState("direction", 2);
 * block.setPermutation(newPermutation);
 * ```
 */