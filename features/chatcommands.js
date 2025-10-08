let enabled = true;

export function toggleChatCommands(state) {
    enabled = state;
}

register("chat", (event) => {
    if (!enabled) return;
    const message = ChatLib.getChatMessage(event);

    const clean = message.replace(/§./g, "").trim();

    if (clean === "!N4" || clean === "!n4") {
        ChatLib.say("https://discord.gg/BFHXFPPPQ6");
    }
});
