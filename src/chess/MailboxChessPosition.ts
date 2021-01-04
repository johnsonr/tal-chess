import { GameStatus, Position, White, Black } from "../core/Position";
import { ChessGameState, ChessMove, ChessPosition } from "./Chess";

export interface Square {
    readonly rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    readonly file: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

    /**
     * Undefined if empty
     */
    piece?: Piece;
}

export enum Piece {
    Pawn =1, Knight =2, Bishop = 3, Rook = 4, Queen = 5, King = 6
}


type Board = Array<Square>[64];

/**
 * Intuitive repsentation of a chessboard.
 * See https://www.chessprogramming.org/8x8_Board
 */
export class MailboxChessPosition implements ChessPosition {

    private board: Board;

    get gameStatus() {
        return GameStatus.Continuing;
    }

    get gameState() {
        return { whiteCanCastle: true, blackCanCastle: true, isCheck: false };
    }

    get playerToMove(): White | Black {
        return White;
    }
    
    legalMoves(): ChessMove[] {
        throw new Error("Method not implemented.");
    }
    afterMove(move: ChessMove): Position<ChessMove, ChessGameState> {
        throw new Error("Method not implemented.");
    }


}