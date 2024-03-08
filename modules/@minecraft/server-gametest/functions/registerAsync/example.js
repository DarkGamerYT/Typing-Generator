import { TicksPerSecond } from "@minecraft/server";
import * as GameTest from "@minecraft/server-gametest";
GameTest.registerAsync("king", "test", async (test) => {
    const location = { x: 1, y: 2, z: 3 };

    test.spawn("minecraft:creeper", location);
    test.succeedWhen(() => {
        test.assertEntityPresentInArea("minecraft:creeper", true);
    });
})
.maxTicks(30 * TicksPerSecond) // 30 seconds
.structureName("king:test"); // "/structures/king/test.mcstructure"