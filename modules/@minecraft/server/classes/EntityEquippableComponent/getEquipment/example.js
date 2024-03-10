import { world, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent(EntityEquippableComponent.componentId);
const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);

console.warn(`Item: ${itemStack.typeId}`); // "minecraft:dirt"