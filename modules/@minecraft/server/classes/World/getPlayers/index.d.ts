/**
 * @beta
 * @remarks
 * Returns a set of players based on a set of conditions
 * defined via the EntityQueryOptions set of filter criteria.
 *
 * @param options
 * Additional options that can be used to filter the set of
 * players returned.
 * @returns
 * A player array.
 * @throws
 * Throws if the provided EntityQueryOptions are invalid.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 *
 * const playersWithTag = world.getPlayers({ tags: [ "helloworld" ] });
 * console.warn(playersWithTag.length);
 * ```
 */