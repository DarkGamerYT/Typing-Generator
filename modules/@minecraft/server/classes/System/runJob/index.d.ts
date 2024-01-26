/**
 * @beta
 * @example
 * ```javascript
 * import { world, system, BlockTypes, Vector } from "@minecraft/server";
 * 
 * const blocks = BlockTypes.getAll();
 * system.runJob(function* () {
 *     while (true) {
 *         const players = world.getAllPlayers();
 *         for (let i = 0; i < players.length; i++) {
 *             const player = players[i];
 *             const below = Vector.add(player.location, Vector.down);
 *             const block = player.dimension.getBlock(below);
 * 
 *             yield block.setType(blocks[Math.floor(Math.random() * blocks.length)]);
 *         };
 *     };
 * }());
 * ```
 */