
import { assert } from "chai";
import "mocha";
import { ChessPosition, Square } from "../../src/chess/Chess";
import { MailboxChessPosition } from "../../src/chess/MailboxChessPosition";
import { White } from "../../src/core/Position";

function createPosition(): ChessPosition {
    return new MailboxChessPosition();
}

describe("ChessPosition", () => {

    describe("squares", () => {

        it("C3 should be 2", () => {
            assert.equal(Square.C1, 2);
        });
    });

    describe("initial state", () => {
        it("should have white to move", () => {
            const pos = createPosition();
            assert.equal(pos.playerToMove, White);
        });

        it("should find multiple legal moves", () => {
            const pos = createPosition();
            assert(pos.legalMoves().length > 0);
        });

    });

    describe("move generation", () => {

        it("should find Nf3", () => {
            const pos = createPosition();
            const moves = pos.legalMoves();
            console.log(JSON.stringify(moves));
            // Reti
            assert(moves.some(m => m.from === Square.G1 && m.to === Square.F3), `Must find Nf3: saw ${JSON.stringify(moves)}`);
        });

    });

});