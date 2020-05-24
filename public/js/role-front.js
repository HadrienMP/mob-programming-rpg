import {behaviourDisplayed} from "./role.js";
const slots = document.getElementsByClassName("slot");

let roles = read();
displayXP(roleName, roles);

const form = document.getElementById("win");
const behaviours = document.getElementsByClassName("behaviour");

for (let i = 0; i < behaviours.length; i++) {
    behaviours[i].addEventListener("click", () => {
        roles = behaviourDisplayed(roleName, roles, () => form.submit());
        displayXP(roleName, roles);
        write(roles);
    });
}

function read() {
    let jsonRoles = sessionStorage.getItem('roles-' + mob);
    if (jsonRoles)
        return JSON.parse(jsonRoles);
    return emptyRoles;
}
function write(roles) {
    sessionStorage.setItem('roles-' + mob, JSON.stringify(roles));
}

function displayXP(roleName, roles) {
    let i = 0;
    let xp = roles[roleName].xp;
    while(i < xp) {
        slots[i].classList.add("full");
        i++;
    }
}
