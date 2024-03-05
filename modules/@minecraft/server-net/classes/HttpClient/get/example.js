import { http } from "@minecraft/server-net";

http.get("http://127.0.0.1:3000/test").then((response) => {
    console.warn(`Body: ${response.body}`);
    console.warn(`Status: ${response.status}`);
});