import { world, system } from "@minecraft/server";

function helloWorld() {
    world.sendMessage("Hello World");
    system.run(helloWorld);
};

system.run(() => {
    world.sendMessage(":D");
    helloWorld();
});