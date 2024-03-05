import { world, HudVisibility, HudElement } from "@minecraft/server";
world.afterEvents.itemUse.subscribe((data) => {
    if (data.itemStack.typeId !== "minecraft:stick") return;

    const screenDisplay = data.source.onScreenDisplay;
    if (data.source.isSneaking) {
        screenDisplay.setHudVisibility(HudVisibility.Reset);
        return;
    };
    
    screenDisplay.setHudVisibility(HudVisibility.Hide);
    screenDisplay.setHudVisibility(HudVisibility.Reset, [ HudElement.Health, HudElement.Crosshair ]);
});