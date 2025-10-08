import { gui } from "./features/gui/gui";

import "./features/dungeon/DialogueSkip";
import "./features/ChatCommands";
import "./features/dropdetector";

register("command", () => {
        gui.open()
}).setName("N4").setAliases("n4", "N4addons", "n4addons");