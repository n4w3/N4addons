import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const config = new DefaultConfig("N4addons", "data/settings.json")

config
.addSwitch({
    category: "Dungeons",
    configName: "DialogueSkip",
    title: "Dialogue Skip Helper",
    description: "Notify When you can skip dialogues",
    subcategory: "Dialogue Skip"
})
.addSwitch({
    category: "Dungeons",
    configName: "DialogueSkipMsg",
    title: "Dialogue Skip Message",
    description: "Send a message to kill mobs in party chat",
    subcategory: "Dialogue Skip"
})
.addSwitch({
    category: "Kuudra",
    configName: "chestopened",
    title: "Chest opened",
    description: "Tell party when your chest as been opened",
    subcategory: "Kuudra Requeue"
})
.addSwitch({
    category: "Kuudra",
    configName: "autorequeue",
    title: "Auto Requeue",
    description: "Automatically requeue when everyone has opened their chest",
    subcategory: "Kuudra Requeue"
})
.addSwitch({
    category: "Others",
    configName: "chatcommands",
    title: "Chat Commands",
    description: "Enable Chat Commands",
    subcategory: "chatcommands"
})
.addSwitch({
    category: "Others",
    configName: "guildhider",
    title: "Guild Message Hider",
    description: "Disable Guild Messages",
    subcategory: "guildhider"
})


const setting = new Settings("N4addons", config, "data/scheme-nwjn.json")

export default () => setting.settings