import { world, ItemStack, EntityInventoryComponent } from "@minecraft/server";
const player = world.getAllPlayers()[0];

const inventory = player.getComponent(EntityInventoryComponent.componentId);
const container = inventory.container;

const itemStack = new ItemStack("minecraft:dirt");
container.addItem(itemStack);
container.setItem(8, itemStack);