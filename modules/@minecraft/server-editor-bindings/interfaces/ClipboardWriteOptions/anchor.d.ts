/**
 * @remarks
 * The anchor is a unit vector representation of the side or
 * corner of the Clipboard Item to be written to the world.
 * `{0, 0, 0}` represents the center of the Clipboard item,
 * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
 * the bottom/back/left corner, etc
 * The anchor is used in conjunction with the item size to
 * determine the object relative anchor point where the object
 * will be applied in the world.
 * Values for the X/Y/Z components should be within the range
 * `(-1 <= X/Y/Z <=1)`
 *
 */