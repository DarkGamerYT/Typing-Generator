/**
 * @remarks Performs an HTTP request.
 *
 * This function can't be called in read-only mode.
 *
 * @param config
 * Contains an HTTP Request object with configuration data on the HTTP request.
 * @returns An awaitable promise that contains the HTTP response.
 * 
 * @example
 * ```javascript
 * import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
 * const request = new HttpRequest("http://127.0.0.1:3000/test");
 * request.setBody("hello world!");
 * request.addHeader("hello", "world");
 * request.setMethod(HttpRequestMethod.Post);
 * 
 * http.request(request).then((response) => {
 *     console.warn(`Body: ${response.body}`);
 *     console.warn(`Status: ${response.status}`);
 * });
 * ```
 */