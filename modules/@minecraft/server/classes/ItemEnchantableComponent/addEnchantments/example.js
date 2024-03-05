import { world, ItemStack, EquipmentSlot } from "@minecraft/server";
world.afterEvents.itemUse.subscribe((data) => {
    if (data.itemStack.typeId !== "minecraft:stick") return;
    const equippable = data.source.getComponent("minecraft:equippable");

    const itemStack = new ItemStack("minecraft:iron_sword", 1);
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    
    // Adds fire aspect and unbreaking to the iron sword
    enchantable.addEnchantment([
        { type: "fire_aspect", level: 2 },
        { type: "unbreaking", level: 3 },
    ]);
    
    // Replace the mainhand item with the iron sword
    equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);
});