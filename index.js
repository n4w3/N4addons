import Settings from "./config";

// command
import "./features/chatcommands";

// dungeon
import "./features/dungeon/dialogueskip";

register("command", () => {
    Settings().getConfig().openGui()
}).setName("N4").setAliases("n4", "N4addons", "n4addons");