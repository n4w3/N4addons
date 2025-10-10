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
    shouldShow: data => data.DialogueSkip,
    title: "Dialogue Skip Message",
    description: "Send a message to kill mobs in party chat",
    subcategory: "Dialogue Skip"
})
.addSwitch({
    category: "Kuudra",
    configName: "chestopened",
    title: "Chest Opened",
    description: "Tell party when your chest as been opened",
    subcategory: "Kuudra Requeue"
})
.addSwitch({
    category: "Kuudra",
    configName: "autorequeue",
    shouldShow: data => data.chestopened,
    title: "Auto Requeue",
    description: "Automatically requeue when everyone has opened their chest",
    subcategory: "Kuudra Requeue"
})
.addSlider({
    category: "Kuudra",
    configName: "chestrequired",
    shouldShow: data => data.chestopened,
    title: "Chest Required",
    description: "Set how many chests need to be opened before requeueing",
    subcategory: "Kuudra Requeue",
    options: [1, 4],
    value: 4
})
.addSwitch({
    category: "Kuudra",
    configName: "iqmod",
    shouldShow: data => data.chestopened,
    title: "IQ mod",
    description: "Use 'IQ' instead of 'N4' in the msg so it work with IQ's mod",
    subcategory: "Kuudra Requeue"
})
.addSwitch({
    category: "Others",
    configName: "chatcommands",
    title: "Chat Commands",
    description: "Enable Chat Commands",
    subcategory: "chatcommands"
})


const setting = new Settings("N4addons", config, "data/scheme-nwjn.json")

export default () => setting.settings