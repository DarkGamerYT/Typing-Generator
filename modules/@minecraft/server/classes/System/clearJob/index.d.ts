/**
 * @beta
 * @example
 * ```javascript
 * import { world, system, BlockTypes, Vector } from "@minecraft/server";
 * 
 * const blocks = BlockTypes.getAll();
 * const job = system.runJob(function* () {
 *     while (true) {
 *         const players = world.getAllPlayers();
 *         for (let i = 0; i < players.length; i++) {
 *             const player = players[i];
 *             const below = Vector.add(player.location, Vector.down);
 *             const block = player.dimension.getBlock(below);
 *             const randomType = blocks[Math.floor(Math.random() * blocks.length)];
 * 
 *             yield block.setType(randomType);
 * 
 *             if (randomType.id != "minecraft:diamond_block) continue;
 *             system.clearJob(job);
 *         };
 *     };
 * }());
 * ```
 */