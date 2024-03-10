import { ItemStack, ItemEnchantableComponent } from "@minecraft/server";

const itemStack = new ItemStack("minecraft:iron_sword");
const enchantments = itemStack.getComponent(ItemEnchantableComponent.componentId);
enchantments.addEnchantment({ type: "sharpness", level: 5 });