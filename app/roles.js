const mobs = {}

exports.get = name => {
    if (name in mobs) return mobs[name]
    mobs[name] = [
        {name: "driver", level: 1, count: 0, slots: 3},
        {name: "navigator", level: 1, count: 0, slots: 3},
        {name: "mobber", level: 1, count: 0, slots: 3},
        {name: "researcher", level: 2, count: 0, slots: 4},
        {name: "sponsor", level: 2, count: 0, slots: 4},
        {name: "rear-admiral", level: 2, count: 0, slots: 4},
        {name: "archivist", level: 3, count: 0, slots: 4},
        {name: "automationist", level: 3, count: 0, slots: 4},
        {name: "nose", level: 3, count: 0, slots: 4},
        {name: "traffic-cop", level: 4, count: 0, slots: 4}
    ];
    return mobs[name];
}
exports.displayable = name => {
    let notGrouped = this.get(name);
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
    console.log(groupedList);
    return groupedList;
}

exports.win = (mob, wonRole) => {
    this.get(mob)
        .find(role => role.name === wonRole)
        .count ++;
}
