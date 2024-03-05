const durability = itemStack.getComponent("durability");
console.warn(`Damage chance: ${durability.getDamageChance(2)}`);