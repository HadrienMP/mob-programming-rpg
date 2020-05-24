import {displayable} from "../../app/roles.js";
import {expect} from "chai"

describe("Roles", () => {
    describe("Display", () => {
        it("are grouped by level", () => {
            let roles = displayable("mobName");
            expect(JSON.stringify(roles)).equal(JSON.stringify(
                [
                    [
                        {"name":"driver","level":1,"count":0,"slots":3},
                        {"name":"navigator","level":1,"count":0,"slots":3},
                        {"name":"mobber","level":1,"count":0,"slots":3}
                    ],
                    [
                        {"name":"researcher","level":2,"count":0,"slots":4},
                        {"name":"sponsor","level":2,"count":0,"slots":4},
                        {"name":"rear-admiral","level":2,"count":0,"slots":4}
                    ],
                    [
                        {"name":"archivist","level":3,"count":0,"slots":4},
                        {"name":"automationist","level":3,"count":0,"slots":4},
                        {"name":"nose","level":3,"count":0,"slots":4}
                    ],
                    [
                        {"name":"traffic-cop","level":4,"count":0,"slots":4}
                    ]
                ]
            ));
        });
    });
});

