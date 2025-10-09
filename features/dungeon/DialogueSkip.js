import Settings from "../../config";

const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

const TARGET_NAME = "Let's see how you can handle this."; 
let wasPresent = false;

register("tick", () => {
    if (!Settings().DialogueSkip) return;

    let found = false;

    const entities = World.getAllEntitiesOfType(EntityArmorStand);
    
    for (let entity of entities) {
        let name = entity.getName();
        if (!name) continue;

        name = name.replace(/§./g, "");

        if (name.toLowerCase().includes(TARGET_NAME.toLowerCase())) {
            found = true;
            break;
        }
    }
    
    if (wasPresent && !found) {
        const message = `§4Kill Mobs!`;
        World.playSound("note.pling", 1, 2)
        Client.showTitle("§4Kill Mobs!", "", 5, 30, 10);
        if (Settings().DialogueSkipMsg) {
                ChatLib.command(`pc [N4] Kill Mobs!`);
        }
        else {
                ChatLib.chat("§4[N4] Kill Mobs!");
        }
    }

    wasPresent = found;
});