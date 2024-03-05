/**
 * @remarks Adds a specified tag to an entity.
 *
 * This function can't be called in read-only mode.
 *
 * @param tag
 * Content of the tag to add.
 * The tag must be less than 256 characters.
 * @returns
 * Returns true if the tag was added successfully.
 * This can fail if the tag already exists on the entity.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * const overworld = world.getDimension("overworld");
 *
 * const mobs = ["creeper", "skeleton", "sheep"];
 *
 * // create some sample mob data
 * for (let i = 0; i < 10; i++) {
 *     let mobTypeId = mobs[i % mobs.length];
 *     let entity = overworld.spawnEntity(mobTypeId, { x: 1, y: 2, z: 3 });
 *     entity.addTag("mobparty." + mobTypeId);
 * };
 * 
 * for (let entity of overworld.getEntities({ tags: ["mobparty.skeleton"] })) {
 *     entity.kill();
 * };
 * ```
 */