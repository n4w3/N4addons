import Settings from "../../config";
import { chatprefix, partymsg } from "../../utils/function";
import Skyblock from "../../../BloomCore/Skyblock"
import { registerWhen } from "../../utils/register"
import config from "../../config";

let ChestOpened = false

registerWhen(register("worldLoad", () => {
    ChestOpened = false
}), () => Skyblock.subArea === "Kuudra's Hollow")

registerWhen(register("packetSent", (packet) => {
    if (!packet) return
    if (!Settings().chestopened) return
    let ClickedType = packet.func_149542_h()

    if (ClickedType == 0 || ClickedType == 1 || ClickedType == 2) {
        let ItemName = packet.func_149546_g()?.func_82833_r()?.removeFormatting()
        let Slot = packet.func_149544_d()
        let ContainerName = Player.getContainer().getName()
        if (ItemName == "Open Reward Chest" && Slot == 31) {
            ChestOpened = ContainerName
        }
    } else if (ClickedType == 3) {
        let Slot = packet.func_149544_d()
        let Container = Player?.getContainer()
        let ContainerName = Container?.getName()
        let ItemName = Container.getStackInSlot(Slot).getName().removeFormatting()

        if (ItemName == "Open Reward Chest" && Slot == 31) {
            ChestOpened = ContainerName
        }
    } else { return }
}).setFilteredClass(net.minecraft.network.play.client.C0EPacketClickWindow), () => Skyblock.subArea === "Kuudra's Hollow")

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (!Settings().chestopened) return
    if (name == "fireworks.blast") {
        if (vol == "20") {
            if (config().iqmod) partymsg("[IQ] Chest Looted")
            else partymsg(chatprefix("Chest Looted"))
        }
    }
}), () => Skyblock.subArea === "Kuudra's Hollow" && ChestOpened)