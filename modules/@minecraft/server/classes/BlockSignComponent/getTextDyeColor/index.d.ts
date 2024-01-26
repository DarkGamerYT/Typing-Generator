/**
 * @remarks Gets the dye that is on the text or undefined if the sign has not been dyed.
 *
 * @param side
 * The side of the sign to read the dye from.
 * If not provided, this will return the dye on the front side of the sign.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * const color = sign.getTextDyeColor(SignSide.Front);
 * console.warn(color);
 * ```
 */