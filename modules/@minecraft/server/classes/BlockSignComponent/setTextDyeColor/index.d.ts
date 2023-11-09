/**
 * @remarks
 * Sets the dye color of the text.
 *
 * This function can't be called in read-only mode.
 *
 * @param color
 * The dye color to apply to the sign or undefined to clear the
 * dye on the sign.
 * @param side
 * The side of the sign the color will be set on. If not
 * provided, the color will be set on the front side of the
 * sign.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * sign.setTextDyeColor(DyeColor.Lime, SignSide.Front);
 * ```
 */