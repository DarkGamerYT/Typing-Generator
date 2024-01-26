/**
 * @beta
 * @remarks Fills an area between begin and end with block of type block.
 *
 * This function can't be called in read-only mode.
 *
 * @param begin
 * The lower northwest starting corner of the area.
 * @param end
 * The upper southeast ending corner of the area.
 * @param block
 * Type of block to fill the volume with.
 * @param options
 * A set of additional options, such as a matching block to potentially replace this fill block with.
 * @returns Returns number of blocks placed.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world, BlockPermutation } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 * 
 * overworld.fillBlocks(
 *     { x: 0, y: 0, z: 0 }, { x: 10, y: 10, z: 10 },
 *     "minecraft:iron_block", {
 *         matchingBlocks: BlockPermutation.resolve("minecraft:dirt")
 *     },
 * );
 * ```
 */