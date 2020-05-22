import {behaviourDisplayed} from "./roles.js";

let roles = read();

const form = document.getElementById("win");
Array.from(document.getElementsByTagName("li"))
    .forEach(xp => xp.onclick = () => {
        roles = behaviourDisplayed(roleName, roles, form.submit);
        write(roles);
    });

function read() {
    let jsonRoles = localStorage.getItem('roles');
    if (jsonRoles)
        return JSON.parse(jsonRoles);
    return emptyRoles;
}
function write(roles) {
    localStorage.setItem('roles', JSON.stringify(roles));
}
