/**
 * @remarks Performs a simple HTTP get request.
 *
 * This function can't be called in read-only mode.
 *
 * @param uri
 * URL to make an HTTP Request to.
 * @returns An awaitable promise that contains the HTTP response.
 * 
 * @example
 * ```javascript
 * import { http } from "@minecraft/server-net";
 * 
 * http.get("http://127.0.0.1:3000/test").then((response) => {
 *     console.warn(`Body: ${response.body}`);
 *     console.warn(`Status: ${response.status}`);
 * });
 * ```
 */