/**
 * @remarks
 * Sets an Entity Property to the provided value.
 * This property change is not applied until the next tick.
 *
 * This function can't be called in read-only mode.
 *
 * @param identifier
 * The Entity Property identifier.
 * @param value
 * The property value.
 * The provided type must be compatible with the type specified in the entity's definition.
 * @throws
 * Throws if the entity is invalid.
 * Throws if an invalid identifier is provided.
 * Throws if the provided value type does not match the property type.
 * Throws if the provided value is outside the expected range (int, float properties).
 * Throws if the provided string value does not match the set of accepted enum values (enum properties).
 */