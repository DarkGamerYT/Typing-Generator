import { ItemStack } from "@minecraft/server";

const itemStack = new ItemStack("minecraft:iron_sword");
const enchantments = itemStack.getComponent("minecraft:enchantable");
enchantments.addEnchantment({ type: "sharpness", level: 5 });