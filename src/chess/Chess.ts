
import { Evaluator, Score } from "../core/Evaluator";
import * as core from "../core/Position";
import { Searcher } from "../core/Search";

export interface ChessPosition extends core.Position<ChessMove, ChessGameState> {

}

export interface ChessMove extends core.Move {

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