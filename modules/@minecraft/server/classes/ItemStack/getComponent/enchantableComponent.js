import { ItemStack } from "@minecraft/server";

const item = new ItemStack("minecraft:iron_sword");
const enchantments = item.getComponent("minecraft:enchantable");
enchantments.addEnchantment({ type: "sharpness", level: 5 });