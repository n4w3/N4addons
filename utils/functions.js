import { PREFIX, HYPIXEL_RANKS } from "./constants";

export function chatprefix(msg) {
    return PREFIX + msg;
}

export function modprefix(msg) {
    ChatLib.chat("&4" + PREFIX + msg);
}

export function partymsg(msg) {
    if(!msg) return
    ChatLib.command("pc " + msg)
}

export function guildmsg(msg) {
    if(!msg) return
    ChatLib.command("gc " + msg)
}

export function allchatmsg(msg) {
    if(!msg) return
    ChatLib.command("ac " + msg)
}

export function command(msg) {
    if(!msg) return
    ChatLib.command(msg)
}

export function title(color, msg, subtitle, fadein, stay, fadeout) {
    if(!msg) return
    Client.showTitle(color + msg, subtitle, fadein, stay, fadeout);
}

export function sound(sound, volume, pitch) {
    if(!sound) return
    World.playSound(sound, volume, pitch)
}

export function formatNumber(num, colorize = false) {
    if (typeof num !== 'number') return String(num);

    let sign = num < 0 ? "-" : "";
    let absNum = Math.abs(num);
    let color = colorize ? (num >= 0 ? "&a" : "&c") : "";

    if (absNum >= 1000000000) {
        return `${color}${sign}${(absNum / 1000000000).toFixed(2)}B`;
    } else if (absNum >= 1000000) {
        return `${color}${sign}${(absNum / 1000000).toFixed(2)}M`;
    } else if (absNum >= 1000) {
        return `${color}${sign}${(absNum / 1000).toFixed(1)}k`;
    }
    return `${color}${sign}${Math.round(absNum).toLocaleString('en-US')}`;
}

export function extractPlayerName(fullname) {
    let name = fullname.trim();

    for (const rank of HYPIXEL_RANKS) {
        if (name.startsWith(rank)) {
            name = name.substring(rank.length).trim();
            return name;
        }
    }

    if (name.startsWith("[") && name.includes("]")) {
        const endOfRank = name.indexOf("]");
        if (endOfRank > 0) {
            name = name.substring(endOfRank + 1).trim(); 
        }
    }

    return name;
}