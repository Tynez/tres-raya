import React from 'react'
import { Player } from '../../../player/domain/player'
import { Line, ScoreBoardContainer } from './assets/styles'

interface ScoreBoardProps {
    players: Player[] | undefined
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ players }) => {
    return  <ScoreBoardContainer>
                {
                    players?.map((player) => {
                        return <Line symbol={player.getBoxSymbol()}>
                            Partidas ganadas del jugador {player.getBoxSymbol()}: {player.getWins()}
                        </Line>
                    })
                }
                <div>
                    Empates {players && players[0].getDraws()}
                </div>
            </ScoreBoardContainer>
}