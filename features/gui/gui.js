import { Gui, Button, Toggle } from "DocGuiLib";
import { toggleDialogueSkip } from "../dungeon/DialogueSkip";
import { toggleChatCommands } from "../ChatCommands";
import { toggleDungeonDropDetector, togglePartyChat, toggleGuildChat } from "../dungeon/DungeonDropDetector";

export const gui = new Gui("N4 addons");
gui.setColorScheme("data/ColorScheme.json");

const dialogueSkipToggle = new Toggle("BloodSkipper", 10, 30, true, (state) => {
    toggleDialogueSkip(state);
    ChatLib.chat(`BloodSkipper: ${state ? "§aON" : "§cOFF"}`);
});
gui.add(dialogueSkipToggle);

const chatCommandsToggle = new Toggle("ChatCommands", 10, 60, true, (state) => {
    toggleChatCommands(state);
    ChatLib.chat(`ChatCommands: ${state ? "§aON" : "§cOFF"}`);
});
gui.add(chatCommandsToggle);

const partyChatToggle = new Toggle("Party Chat", 30, 120, true, (state) => {
    togglePartyChat(state);
    ChatLib.chat(`DungeonDropDetector Party: ${state ? "§aON" : "§cOFF"}`);
});

const guildChatToggle = new Toggle("Guild Chat", 30, 150, false, (state) => {
    toggleGuildChat(state);
    ChatLib.chat(`DungeonDropDetector Guild: ${state ? "§aON" : "§cOFF"}`);
});

const dungeonDropDetectorToggle = new Toggle("DungeonDropDetector", 10, 90, true, (state) => {
    toggleDungeonDropDetector(state);
    ChatLib.chat(`DungeonDropDetector: ${state ? "§aON" : "§cOFF"}`);

    partyChatToggle.setEnabled(state);
    guildChatToggle.setEnabled(state);
});
gui.add(dungeonDropDetectorToggle);

gui.add(partyChatToggle);
gui.add(guildChatToggle);

partyChatToggle.setEnabled(dungeonDropDetectorToggle.getState());
guildChatToggle.setEnabled(dungeonDropDetectorToggle.getState());
