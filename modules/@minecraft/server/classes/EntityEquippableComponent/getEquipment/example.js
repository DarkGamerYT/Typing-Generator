import { world, EquipmentSlot } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent("minecraft:equippable");
const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);

console.warn(`Item: ${itemStack.typeId}`); // "minecraft:dirt"