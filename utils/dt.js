import Settings from "../config";
import { command, partymsg, chatprefix } from "./function";

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

register("chat", (name, reason) => {
    dtStatus.i++;
    if(dtStatus.i == 1) {
        dtStatus.dtname = name;
        partymsg(chatprefix(`${name} needs downtime`));
    }
    else {
        dtStatus.dtname += ", " + name
        partymsg(chatprefix(`${name} needs downtime`));
    }    
    dt = true
}).setCriteria("Party > ${name}: !dt ${reason}")

register("chat", (name) => {
    i++
    if(i == 1) {
        dtname = name
        partymsg(chatprefix(`${dtname} needs downtime`));
    }
    else {
        dtname += ", " + name
        partymsg(chatprefix(`${name} needs downtime`));
    }    
    dtStatus.dt = true;
}).setCriteria("Party > ${name}: !dt")

register("worldLoad", () => {
    resetDt();
})