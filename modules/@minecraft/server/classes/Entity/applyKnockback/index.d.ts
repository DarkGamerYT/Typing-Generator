/**
 * @beta
 * @remarks
 * Applies impulse vector to the current velocity of the
 * entity.
 *
 * This function can't be called in read-only mode.
 *
 * @param directionX
 * X direction in horizontal plane.
 * @param directionZ
 * Z direction in horizontal plane.
 * @param horizontalStrength
 * Knockback strength for the horizontal vector.
 * @param verticalStrength
 * Knockback strength for the vertical vector.
 * @throws This function can throw errors.
 * 
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 *
 * const mobs = ["creeper", "skeleton", "sheep"];
 *
 * // create some sample mob data
 * for (let i = 0; i < 10; i++) {
 *  let entity = overworld.spawnEntity(mobs[i % mobs.length], { x: 1, y: 2, z: 3 });
 * };
 *
 * for (let entity of overworld.getEntities({ type: "skeleton" })) {
 *  entity.applyKnockback(0, 0, 0, 1);
 * };
 * ```
 */