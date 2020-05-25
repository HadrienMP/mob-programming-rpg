function read() {
    let jsonRoles = sessionStorage.getItem('roles-' + mob);
    if (jsonRoles)
        return JSON.parse(jsonRoles);
    return emptyRoles;
}
function write(roles) {
    sessionStorage.setItem('roles-' + mob, JSON.stringify(roles));
}

function displayXP(roleName, roles, slots) {
    let i = 0;
    let xp = roles[roleName].xp;
    while(i < xp) {
        slots[i].classList.add("full");
        i++;
    }
}

const slotsList = document.getElementsByClassName("slots"); 
for(slots of slotsList) {
    displayXP(slots.getAttribute("data-name"), read(), slots.children);
}
