import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
const request = new HttpRequest("http://127.0.0.1:3000/test");
request.setBody("hello world!");
request.addHeader("hello", "world");
request.setMethod(HttpRequestMethod.Post);

http.request(request).then((response) => {
    console.warn(`Body: ${response.body}`);
    console.warn(`Status: ${response.status}`);
});