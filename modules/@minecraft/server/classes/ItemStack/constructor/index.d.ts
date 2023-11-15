/**
 * @remarks
 * Creates a new instance of a stack of items for use in the
 * world.
 *
 * @param itemType
 * Type of item to create. See the {@link
 * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
 * a list of standard item types in Minecraft experiences.
 * @param amount
 * Number of items to place in the stack, between 1-255. The
 * provided value will be clamped to the item's maximum stack
 * size. Note that certain items can only have one item in the
 * stack.
 * @throws
 * Throws if `itemType` is invalid, or if `amount` is outside
 * the range of 1-255.
 * 
 * @example
 * ```javascript
 * import { ItemStack } from "@minecraft/server";
 * 
 * const item = new ItemStack("minecraft:dirt", 8);
 * ```
 */