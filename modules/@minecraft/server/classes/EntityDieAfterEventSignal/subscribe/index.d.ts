/**
 * @remarks Subscribes to an event that fires when an entity dies.
 *
 * This function can't be called in read-only mode.
 *
 * @param callback
 * Function to call when an entity dies.
 * @param options
 * Additional filtering options for when the subscription fires.
 * @returns Returns the closure that can be used in future downstream calls to unsubscribe.
 */