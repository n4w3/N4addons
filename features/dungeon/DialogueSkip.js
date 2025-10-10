import Settings from "../../config";
import { title, sound, modprefix, chatprefix, partymsg } from "../../utils/function";
import { EntityArmorStand } from "../../utils/constants";

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
        const msg = 'Kill Mobs!';
        sound("note.pling", 1, 2);
        title("§4", msg, "§4Dialogue Skip!", 5, 30, 10);
        if (Settings().DialogueSkipMsg) {
                partymsg(chatprefix(msg));
        }
        else {
                modprefix(msg);
        }
    }

    wasPresent = found;
});