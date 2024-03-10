import { world, ItemStack, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const equippable = player.getComponent(EntityEquippableComponent.componentId);
const itemStack = new ItemStack("minecraft:dirt", 8);

equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);