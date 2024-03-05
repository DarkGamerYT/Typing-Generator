/**
 * @remarks
 * Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
 * This includes the size of both the key and the value.
 * This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.
 *
 * @throws This function can throw errors.
 */