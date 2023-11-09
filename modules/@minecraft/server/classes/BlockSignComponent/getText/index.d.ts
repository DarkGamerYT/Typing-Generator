/**
 * @remarks
 * Returns the text of the sign if `setText` was called with a
 * string, otherwise returns undefined.
 *
 * @param side
 * The side of the sign to read the message from. If not
 * provided, this will return the message from the front side
 * of the sign.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * const text = sign.getText(SignSide.Front);
 * console.warn(text);
 * ```
 */