import Settings from "../config";
import { command, partymsg, chatprefix, extractPlayerName } from "./functions";

let dtStatus = {
    dt: false,
    dtname: "",
    i: 0
}

export function getDtStatus() {
    return dtStatus.dt;
}
export function getDtName() {
    return dtStatus.dtname;
}
export function resetDt() {
    dtStatus.dt = false;
    dtStatus.dtname = "";
    dtStatus.i = 0;
}

register("chat", (fullname, reason) => {
    dtStatus.i++;
    const name = extractPlayerName(fullname);
    if(dtStatus.i == 1) {
        dtStatus.dtname = name;
        partymsg(chatprefix(`${fullname} needs downtime`));
    }
    else {
        dtStatus.dtname += ", " + name
        partymsg(chatprefix(`${fullname} needs downtime`));
    }    
    dtStatus.dt = true;
}).setCriteria("Party > ${fullname}: !dt ${reason}")

register("chat", (fullname) => {
    dtStatus.i++;
    const name = extractPlayerName(fullname);
    if(dtStatus.i == 1) {
        dtStatus.dtname = name;
        partymsg(chatprefix(`${fullname} needs downtime`));
    }
    else {
        dtStatus.dtname += ", " + name
        partymsg(chatprefix(`${fullname} needs downtime`));
    }    
    dtStatus.dt = true;
}).setCriteria("Party > ${fullname}: !dt")

register("worldLoad", () => {
    resetDt();
})