const mobs = {}

exports.get = name => {
    if (name in mobs) return mobs[name]
    mobs[name] = {
        driver: {level: 1, count: 0, slots: 3},
        navigator: {level: 1, count: 0, slots: 3},
        mobber: {level: 1, count: 0, slots: 3},
        researcher: {level: 2, count: 0, slots: 4},
        sponsor: {level: 2, count: 0, slots: 4},
        "rear-admiral": {level: 2, count: 0, slots: 4},
        archivist: {level: 3, count: 0, slots: 4},
        automationist: {level: 3, count: 0, slots: 4},
        nose: {level: 3, count: 0, slots: 4},
        "traffic-cop": {level: 4, count: 0, slots: 4}
    }
    return mobs[name];
}
exports.displayable = name => {
    let roles = this.get(name);
    let notGrouped = [];
    for (roleName in roles) {
        let role = roles[roleName];
        role["name"] = roleName;
        notGrouped.push(role);
    }
    let grouped = notGrouped.groupBy(role => role.level);
    return toDisplayableRoles(grouped);
}

Array.prototype.groupBy = function (getter) {
    let grouped = {};
    this.forEach(role => {
        let list = grouped[getter(role)] || [];
        list.push(role)
        grouped[getter(role)] = list;
    });
    return grouped;
}

function toDisplayableRoles(grouped) {
    let groupedList = []
    for (const level in grouped) {
        groupedList[level - 1] = grouped[level];
    }
    return groupedList;
}

exports.win = (mob, wonRole) => {
    this.get(mob)[wonRole]
        .count ++;
}
