import Settings from "../../config";
import { command, partymsg, chatprefix } from "../../utils/function";
import Skyblock from "../../../BloomCore/Skyblock"
import { registerWhen } from "../../utils/register"
import { dt, dtname } from "../others/chatcommands"; 

let playerFound = 0

registerWhen(register("worldLoad", () => {
    playerFound = 0
}), () => Skyblock.subArea === "Kuudra's Hollow")

registerWhen(register("chat", (rank, user, mod) => {
    playerFound++
    if (playerFound < Settings().chestrequired) {
        ChatLib.chat(`§4${rank} ${user} §8(§7${playerFound}§8/§7${Settings().chestrequired}§8)`)
    } else if (playerFound == Settings().chestrequired) {
        ChatLib.chat(`§4${rank} ${user} §8(§a${playerFound}§8/§a${Settings().chestrequired}§8)`)
        if (Settings().autorequeue) {
            if (dt == true) {
            partymsg(chatprefix(`${playerFound}/${Settings().chestrequired} Looted - Wait for ${dtname}...`));
            }
            else {
            partymsg(chatprefix(`${playerFound}/${Settings().chestrequired} Looted - Requeuing...`));
            command("instancerequeue");
            }
        }

    }
}).setCriteria("Party > ${rank} ${user}: [${mod}] Chest Looted"), () => Skyblock.subArea === "Kuudra's Hollow")