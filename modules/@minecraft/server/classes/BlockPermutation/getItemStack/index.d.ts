/**
 * @beta
 * @remarks Retrieves a prototype item stack based on this block permutation that can be used with item Container/ContainerSlot APIs.
 *
 * @param amount
 * Number of instances of this block to place in the prototype itemstack.
 *
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * //Get the block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * const permutation = block.permutation;
 *
 * const itemStack = permutation.getItemStack(1);
 * console.warn(itemStack.typeId);
 * ```
 */