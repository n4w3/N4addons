let enabled = true;

export function toggleDialogueSkip(state) {
    enabled = state;
}

const TARGET_NAME = "handle this"; 
let wasPresent = false;

register("tick", () => {
    if (!enabled) return;
    const found = World.getAllEntities().some(e => {
        if (e.getClassName() !== "EntityArmorStand") return false;

        const nbt = e.getNBT();
        if (!nbt.getBoolean("CustomNameVisible")) return false;

        let name = nbt.getString("CustomName");
        if (!name) return false;

        name = name.replace(/§./g, "");

        return name.toLowerCase().includes(TARGET_NAME.toLowerCase());
    });

    if (wasPresent && !found) {
        ChatLib.say(`§4[N4] Kill Mobs!`);
        showDisappearMessage();
    }

    wasPresent = found;
});

function showDisappearMessage() {
    const message = `§4Kill Mobs!`;
    let ticks = 0;

    const renderTrigger = register("renderOverlay", () => {
        if (ticks > 20) {
            renderTrigger.unregister();
            return;
        }

        Renderer.drawString(
            message,
            Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(message) / 2,
            Renderer.screen.getHeight() / 2
        );

        ticks++;
    });
}
