/**
 * @remarks Sets a custom base color used for the sign text.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 * @example
 * ```javascript
 * const waterContainer = block.getComponent("waterContainer");
 * const customColor = {
 *     red: 1.0,
 *     green: 1.0,
 *     blue: 1.0,
 *     alpha: 1.0
 * };
 * 
 * waterContainer.setCustomColor(customColor);
 * ```
 */