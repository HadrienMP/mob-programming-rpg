export function read() {
    let jsonRoles = sessionStorage.getItem('roles-' + mob);
    if (jsonRoles)
        return JSON.parse(jsonRoles);
    return emptyRoles;
}

export function write(roles) {
    sessionStorage.setItem('roles-' + mob, JSON.stringify(roles));
}
