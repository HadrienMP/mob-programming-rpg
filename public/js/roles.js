export function behaviourDisplayed(roleName, roles, badgeWon) {
    let role = roles[roleName];
    role.xp = role.xp || 0;
    if (role.xp == role.slots) return roles;

    role.xp++;
    if (role.xp === role.slots) badgeWon();
    return roles;
}
