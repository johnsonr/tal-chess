import { GameStatus, Position, White, Black } from "../core/Position";
import { ChessGameState, ChessMove, ChessPosition, ChessPositionFactory, InitialFEN, Square } from "./Chess";

import * as _ from "lodash";

export interface SquareState {
    // readonly rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    // readonly file: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

    /**
     * Undefined if empty
     */
    piece?: Piece;
    color?: White | Black;
}

export enum Piece {
    Pawn =1, Knight =2, Bishop = 3, Rook = 4, Queen = 5, King = 6
}

const North = +8, South = +8, East = +1, West = -1;

// Not all these moves may be legal. Some may be off the board
 const KnightMoves = [ 
    North + North + East, 
    North + North + West, 
    North + East + East, 
    North + West + West,
    South + South + East, 
    South + South + West, 
    South + East + East, 
    South + West + West
];

/**
 * Squares go from 0 (A1) to 63 (H8)
 */
type Board = Array<SquareState>;

/**
 * Simple representation of a chessboard.
 * See https://www.chessprogramming.org/8x8_Board
 */
export class MailboxChessPosition implements ChessPosition {

    private board: Board;

    // rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    constructor(fen: string = InitialFEN) {
        this.board = new Array<SquareState>(64);
        let fendot = "";
        for (let i = 0; i <= fen.length; i++) {
            const c = fen.charAt(i);
            const isnum = /^\d$/.test(c);
            if (isnum) {
                const val = parseInt(c);
                const str = new Array(val + 1).join( "." );
                fendot += str;
            }
            else fendot += c;
        }
        const pieces = fendot.split(" ")[0];
        const ranksFromA = pieces.split("/").reverse();
        // TODO error checking
        for (let rank = 0; rank < 8; rank++) {
            const rankStr = ranksFromA[rank];
            console.log(`Rank string /${rankStr}/`);

            for (let file = 0; file < 8; file ++) {
                switch (rankStr[file].toUpperCase()) {
                    case ".":
                        this.board[rank * 8 + file] = { };
                        break;
                    case "N" :
                        this.board[rank * 8 + file] = { piece: Piece.Knight, color: rankStr[file] === "N" ? White: Black };
                        break;
                    default:
                        console.log("Unsupported piece in FEN " + rankStr[file]);
                        this.board[rank * 8 + file] = { };
                        break;
                }
            }
        }
        // TODO other stuff from end of FEN
    }

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
        const moves: ChessMove[] = [];
        for (let sq = 0; sq < 64; sq++) {
            switch (this.board[sq].piece) {
                case undefined:
                    break;
                case Piece.Knight:
                    const allMovesOnBoard = KnightMoves.map(knm => sq + knm).filter(legalSquare);
                    for (let toSq of allMovesOnBoard) {
                        moves.push({ from: sq, to: toSq});
                    }
                    // TODO filter out our pieces
                    break;
                default:
                    console.log(`Unsupported piece ${this.board[sq].piece}`);
                    break;

            }
        }

        return moves;
    }

    afterMove(move: ChessMove): Position<ChessMove, ChessGameState> {
        throw new Error("Method not implemented.");
    }

}

function legalSquare(sq: number): boolean {
    return sq >= 0 && sq <= 63;
}