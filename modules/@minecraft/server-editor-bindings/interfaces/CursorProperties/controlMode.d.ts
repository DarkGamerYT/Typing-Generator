/**
 * @remarks
 * Enum representing the cursor control mode
 * - Fixed Mode locks the cursor to a position which is <X>
 * blocks offset from the current player position. The cursor
 * is camera relative, so it will always appear <X> blocks
 * ahead of the players feet
 * - Keyboard Mode puts the cursor under direct control of the
 * API, and ignores any mouse input.  The cursor can only be
 * moved around using the moveBy method
 * - KeyboardAndMouse mode puts the cursor under a shared
 * control of onMouseMove and keyboard input.  Any mouse
 * movement events will set the cursor to the position of the
 * mouse/world raycast.  This can be modified using the moveBy
 * method, but any subsequent mouse events will reset the
 * position back to where the raycast intersection occurs
 * - Mouse mode puts the cursor under control of mouse move
 * events, and moveBy method will be ignored
 *
 *
 */