import Settings from "../../config";

register("chat", (event) => {
    if (!Settings().guildhider) return;
    const msg = ChatLib.getChatMessage(event);
    const trimmed = msg.trimStart();
    if (trimmed.startsWith("§2Guild >") || trimmed.startsWith("&2Guild >")) {
        cancel(event);
  }
});