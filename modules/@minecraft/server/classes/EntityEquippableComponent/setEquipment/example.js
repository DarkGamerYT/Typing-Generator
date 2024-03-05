import { world, ItemStack, EquipmentSlot } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent("minecraft:equippable");
const itemStack = new ItemStack("minecraft:dirt", 8);

equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);