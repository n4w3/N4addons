import Settings from "../../config";
import { command, chatprefix, partymsg } from "../../utils/utils";

register("chat", () => {
    if (!Settings().autorequeue) return;
    if (chestopened == 4) {
        if (msg.includes("Chest Opened")) {
        chestopened+= 1;
        if (chestopened == 4) {
            partymsg(chatprefix("Everyone has opened their chest, requeuing..."));
            command("joindungeon kuudra_infernal");
}}}});

register("worldload", () => {
    chestopened = 0;
})