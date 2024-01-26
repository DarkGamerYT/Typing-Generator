/**
 * @remarks Effect type for the given identifier.
 *
 * This function can't be called in read-only mode.
 *
 * @returns
 * Effect type for the given identifier or undefined if the effect does not exist.
 * @example
 * ```javascript
 * import { EffectTypes } from "@minecraft/server";
 *
 * const effectType = EffectTypes.get("overworld");
 * console.warn(effectType.getName);
 * ```
 */