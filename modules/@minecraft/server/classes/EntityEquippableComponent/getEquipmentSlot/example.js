import { world, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent(EntityEquippableComponent.componentId);
const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

console.warn(`Item: ${slot.typeId}`); // "minecraft:dirt"