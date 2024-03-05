import { world, system, EasingType } from "@minecraft/server";

// Runs every tick
system.runInterval(() => {
    // Gets all players
    const players = world.getAllPlayers();

    // Loops all players
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        // Sets the camera for the player to 'minecraft:free' with custom options
        player.camera.setCamera("minecraft:free", {
            easeOptions: {
                easeTime: 0.75,
                easeType: EasingType.Linear,
            },
            location: {
                x: player.location.x - 4,
                y: player.location.y + 8,
                z: player.location.z - 4,
            },
            rotation: {
                x: 60,
                y: -135,
            },
        });
    };
});