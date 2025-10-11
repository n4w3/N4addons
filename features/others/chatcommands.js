import Settings from "../../config";
import { command, partymsg, chatprefix } from "../../utils/function";

export let dt = false
export let dtname = ""
let i = 0

register("chat", (name, cmd, event) => {
    if(!Settings().chatcommands) return
    if(cmd == "pko" || cmd == "kickoffline") 
        command(`party kickoffline`)
    if(cmd == "n4" || cmd == "n4addons") 
        partmsg(`https://discord.gg/BFHXFPPPQ6`)
}).setCriteria(/Party > (?:.+) (.+): (?:-|,|;|<|>|!)(.+)/)

register("chat", (name, reason) => {
    i++
    if(i == 1) {
        dtname = name
        partymsg(chatprefix(`${dtname} needs downtime`));
    }
    else {
        dtname += ", " + name
        partymsg(chatprefix(`${name} needs downtime`));
    }    
    dt = true
}).setCriteria("Party > ${name}: !dt ${reason}")

register("chat", (name) => {
    i++
    if(i == 1) {
        dtname = name
        partymsg(chatprefix(`${dtname} needs downtime`));
    }
    else {
        dtname += ", " + name
        partymsg(chatprefix(`${name} needs downtime`));
    }    
    dt = true
}).setCriteria("Party > ${name}: !dt")

register("worldLoad", () => {
    dt = false
    dtname = ""
    i = 0
})