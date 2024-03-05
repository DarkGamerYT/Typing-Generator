import { world, EquipmentSlot } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent("minecraft:equippable");
const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

console.warn(`Item: ${slot.typeId}`); // "minecraft:dirt"