import Settings from "./config";


// dungeon
import "./features/dungeon/DialogueSkip";

// kuudra
import "./features/kuudra/chestlooted";
import "./features/kuudra/autorequeue";

// others
import "./features/others/chatcommands";

// slayer


register("command", () => {
    Settings().getConfig().openGui()
}).setName("N4").setAliases("n4", "N4addons", "n4addons");