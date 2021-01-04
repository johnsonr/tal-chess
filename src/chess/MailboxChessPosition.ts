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
 * Simple representation of a chessboard.
 * See https://www.chessprogramming.org/8x8_Board
 */
export class MailboxChessPosition implements ChessPosition {

    private board: Board;

    get gameStatus() {
        const legalMoves = this.legalMoves();
        if (legalMoves.length === 0) {
            // Either checkmate or stalemate
            return this.gameState.isCheck ? 
                this.playerToMove === White ? GameStatus.BlackWin : GameStatus.WhiteWin :
                GameStatus.Draw;
        }

        // TODO consider draw by repetition and 50 move rule. 
        // Former may come from transposition table
        return GameStatus.Continuing;
    }

    get gameState() {
        return { whiteCanCastle: true, blackCanCastle: true, isCheck: false };
    }

    get playerToMove(): White | Black {
        // TODO implement this
        return White;
    }
    
    legalMoves(): ChessMove[] {
        throw new Error("Method not implemented.");
    }
    afterMove(move: ChessMove): Position<ChessMove, ChessGameState> {
        throw new Error("Method not implemented.");
    }


}