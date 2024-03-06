import { world, ItemStack} from "@minecraft/server";
const player = world.getAllPlayers()[0];

const inventory = player.getComponent("inventory");
const container = inventory.container;

const itemStack = new ItemStack("minecraft:dirt");
container.addItem(itemStack);
container.setItem(8, itemStack);