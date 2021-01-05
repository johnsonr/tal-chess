
import { Evaluator, Score } from "../core/Evaluator";
import * as core from "../core/Position";
import { Searcher } from "../core/Search";

export const InitialFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export interface ChessPosition extends core.Position<ChessMove, ChessGameState> {

}

export enum Square {

    A1, B1, C1, D1, E1, F1, G1, H1,
    A2, B2, C2, D2, E2, F2, G2, H2,
    A3, B3, C3, D3, E3, F3, G3, H3,
    A4, B4, C4, D4, E4, F4, G4, H4,
    A5, B5, C5, D5, E5, F5, G5, H5,
    A6, B6, C6, D6, E6, F6, G6, H6,
    A7, B7, C7, D7, E7, F7, G7, H7,
    A8, B8, C8, D8, E8, F8, G8, H8,

}

export interface ChessMove extends core.Move {
    from: Square;
    to: Square;
}

export interface ChessGameState extends core.GameState {

    whiteCanCastle: boolean;
    blackCanCastle: boolean;
    isCheck: boolean;

    // TODO need to consider previous move to handle en passant rule

    // TODO consider 50 move rule, so need count since capture

}

export interface ChessScore extends Score {
    value: number;

    /**
     * If specified, whether we want to get into this position
     */
    preference?: number;
}

/**
 * Create positions from serialized representation.
 * See https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
 */
export interface ChessPositionFactory {

    fromFEN(fen: string): ChessPosition;

}

export type ChessEvaluator = Evaluator<ChessMove, ChessGameState, ChessScore>;

export type ChessSearcher = Searcher<ChessMove, ChessGameState, ChessScore>;