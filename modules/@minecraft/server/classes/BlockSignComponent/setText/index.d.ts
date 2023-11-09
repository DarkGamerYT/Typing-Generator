/**
 * @remarks
 * Sets the text of the sign component.
 *
 * This function can't be called in read-only mode.
 *
 * @param message
 * The message to set on the sign. If set to a string, then
 * call `getText` to read that string. If set to a RawMessage,
 * then calling `getRawText` will return a RawText. If set to a
 * RawText, then calling `getRawText` will return the same
 * object that was passed in.
 * @param side
 * The side of the sign the message will be set on. If not
 * provided, the message will be set on the front side of the
 * sign.
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * 
 * const helloWorldMessage = { text: "Hello World" };
 * sign.setText(helloWorldMessage, SignSide.Front);
 * ```
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * 
 * const helloWorldMessage = { text: 'Hello World' };
 * sign.setText(helloWorldMessage, SignSide.Front);
 * ```
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * 
 * const helloWorldMessage = { rawtext: [{ text: "Hello World" }] };
 * sign.setText(helloWorldMessage, SignSide.Front);
 * ```
 * @example
 * ```javascript
 * const sign = block.getComponent("sign");
 * sign.setText("Hello World", SignSide.Front);
 * ```
 */