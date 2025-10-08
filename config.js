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
    category: "Others",
    configName: "chatcommands",
    title: "Chat Commands",
    description: "Enable/Disable Chat Commands",
    subcategory: "chatcommands"
})


const setting = new Settings("N4addons", config, "data/scheme-nwjn.json")

export default () => setting.settings