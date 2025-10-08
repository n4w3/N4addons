import Settings from "../config";

register("chat", (name, cmd, event) => {
    if(!Settings().chatcommands) return
    if(cmd == "pko" || cmd == "kickoffline") 
        ChatLib.command(`party kickoffline`)
    if(cmd == "n4" || cmd == "n4addons") 
        ChatLib.command(`pc https://discord.gg/BFHXFPPPQ6`)
}).setCriteria(/Party > (?:.+) (.+): (?:-|,|;|<|>|!)(.+)/)