import { world, BlockPermutation } from "@minecraft/server";

class TestComponent {
    constructor() {
        this.onStepOn = this.onStepOn.bind(this);
    };

    onStepOn(data) {
        const permutation = BlockPermutation.resolve("minecraft:dirt");
        data.block.setPermutation(permutation);
    };
};

world.beforeEvents.worldInitialize.subscribe((data) => {
    data.blockTypeRegistry.registerCustomComponent("test:custom_component", new TestComponent());

    data.blockTypeRegistry.registerCustomComponent("test:component", {
        onStepOn: (data) => {
            if (!data.entity) return;

            data.entity.applyKnockback(0, 0, 1, 1.25);
        },
    });
});