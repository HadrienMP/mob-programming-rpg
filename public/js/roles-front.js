import {read} from "./storage.js";

function displayXP(roleName, roles, slots) {
    let i = 0;
    let xp = roles[roleName].xp;
    while(i < xp) {
        slots[i].classList.add("full");
        i++;
    }
}

const slotsList = document.getElementsByClassName("slots"); 
for(let slots of slotsList) {
    displayXP(slots.getAttribute("data-name"), read(), slots.children);
}
