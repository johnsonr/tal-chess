
import * as core from "../core/Position";

export interface ChessPosition extends core.Position<ChessMove, ChessGameState> {

}

export interface ChessMove extends core.Move {

}

export interface ChessGameState extends core.GameState {

    whiteCanCastle: boolean;
    blackCanCastle: boolean;
    isCheck: boolean;
}

export interface ChessScore extends core.Score {
    value: number;

    /**
     * If specified, whether we want to get into this position
     */
    preference?: number;
}

export interface ChessPositionFactory {

    fromFEN(fen: string): ChessPosition;

}