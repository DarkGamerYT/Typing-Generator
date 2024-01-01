/**
 * @example
 * ```javascript
 * import { HttpRequest, HttpHeader, HttpRequestMethod } from "@minecraft/server-net";
 * const request = new HttpRequest("http://127.0.0.1:3000/test");
 * request.setMethod(HttpRequestMethod.Post);
 * request.setBody("hello world!");
 * request.addHeader("hello", "world");
 * request.setHeaders([
 *     new HttpHeader("test", "123"),
 *     new HttpHeader("mcheader", "hello"),
 * ]);
 * ```
 */