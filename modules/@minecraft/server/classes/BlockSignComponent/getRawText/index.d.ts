/**
 * @remarks
 * Returns the RawText of the sign if `setText` was called with
 * a RawMessage or a RawText object, otherwise returns
 * undefined.
 *
 * @param side
 * The side of the sign to read the message from. If not
 * provided, this will return the message from the front side
 * of the sign.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * const text = sign.getRawText(SignSide.Front);
 * console.warn(JSON.stringify(text)); // { rawtext: [{ text: "Hello World" }] };
 * ```
 */