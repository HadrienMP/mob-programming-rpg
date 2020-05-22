import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import {behaviourDisplayed} from '../../public/js/roles';

describe("Roles", () => {
    describe("Badge", () => {
	    it("is won when all the slots filled", () => {
	        let badgeWon = sinon.fake();
            let roles = defaultRoles();
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        expect(badgeWon).to.have.been.calledOnce;
	    });
	    it("is won when all the slots filled - level 2", () => {
	        let badgeWon = sinon.fake();
            let roles = defaultRoles();
	        roles = behaviourDisplayed("sponsor", roles, badgeWon);
	        roles = behaviourDisplayed("sponsor", roles, badgeWon);
	        roles = behaviourDisplayed("sponsor", roles, badgeWon);
	        expect(badgeWon).to.not.have.been.called;
	    });
	    it("is not won when all the slots are not filled", () => {
	        let badgeWon = sinon.fake();
            let roles = defaultRoles();
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        expect(badgeWon).not.to.have.been.called;
	    });
    });
    describe("XP", () => {
        it("cannot be won when the badge was already won", () => {
	        let badgeWon = sinon.fake();
            let roles = defaultRoles();
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        roles = behaviourDisplayed("driver", roles, badgeWon);
	        roles = behaviourDisplayed("driver", roles, badgeWon);
            expect(roles["driver"].xp).to.equal(3);
        });
    });
});

function defaultRoles() {
    return {
        driver: { slots: 3 },
        navigator: { slots: 3 },
        mobber: { slots: 3 },
        researcher: { slots: 4 },
        sponsor: { slots: 4 },
        "rear-admiral": { slots: 4 },
        archivist: { slots: 4 },
        automationist: { slots: 4 },
        nose: { slots: 4 },
        "traffic-cop": { slots: 4 },
    };
}
