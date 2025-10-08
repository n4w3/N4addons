let enabled = true;

export function toggleChatCommands(state) {
    enabled = state;
}

register("chat", (player, cmd) => {

    if (!enabled) return;

    cmd = cmd.trim().toLowerCase();
    
    if(cmd === "warp" || cmd === "w") 
        ChatLib.command(`p warp`)
    if(cmd === "allinv" || cmd === "allinvite") 
        ChatLib.command(`party settings allinvite`)
    if(cmd === "n4" || cmd === "n4addons") 
        ChatLib.say(`https://discord.gg/BFHXFPPPQ6`)
}).setCriteria(/Party > (?:\[[^\]]+\] )?(\w+): ([^]+)/);