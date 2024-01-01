/**
 * @remarks
 * Fires when the scripting watchdog shuts down the server.
 * The can be due to using too much memory, or by causing significant slowdown or hang.
 * To prevent shutdown, set the event's cancel property to true.
 */