import { gui } from "./features/gui/gui";
import { scrapeAndSaveMayorData } from "./utils/mayordetector";

import "./features/dungeon/DialogueSkip";
import "./features/ChatCommands";
import "./features/dropdetector";

const INTERVAL_TIME_MS = 5 * 60 * 1000;

register("command", () => {
        gui.open()
}).setName("N4").setAliases("n4", "N4addons", "n4addons");

register('gameLoad', () => {
    
    scrapeAndSaveMayorData(); 

    registerInterval(() => {
        scrapeAndSaveMayorData();
    }, INTERVAL_TIME_MS);

});