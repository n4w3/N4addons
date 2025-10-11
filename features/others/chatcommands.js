import Settings from "../../config";
import { command, partymsg, chatprefix } from "../../utils/function";

register("chat", (name, cmd, event) => {
    if(!Settings().chatcommands) return
    if(cmd == "pko" || cmd == "kickoffline") 
        command(`party kickoffline`)
    if(cmd == "n4" || cmd == "n4addons") 
        partymsg(`https://discord.gg/BFHXFPPPQ6`)
}).setCriteria(/Party > (?:.+) (.+): (?:-|,|;|<|>|!)(.+)/)