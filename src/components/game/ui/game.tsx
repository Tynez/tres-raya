import React, { useEffect } from 'react'
import { GameScenario, Title } from './assets/styles'
import { BoardComponent } from '../../board/ui/board';
import { BoardActions } from '../../board/domain/board';
import { useState } from 'react';
import { Game } from '../domain/game';
import { GameActions } from '../application/game-actions';
import { Player } from '../../player/domain/player';
import { ScoreBoard } from './components/scoreBoard';
import Confetti from 'react-confetti'

export const GameComponent: React.FC = () => {
    const [game, setGame] = useState<Game>()
    const [topMessage, setTopMessage] = useState<string>('Disfruta tu primera partida')
    const [gamePlayers, setGamePlayers] = useState<Player[]>()
    const [showConfetti, setShowConfetti] = useState<boolean>(false)

    useEffect(() => {
        setGame(new GameActions())
    }, [])

    const setPlayers = (players: Player[]) => setGamePlayers(players)

    const isGameOver = (board: BoardActions) => {
        const playerWinner: Player | boolean = board.checkWinner()
        const checkDraw = board.checkDraw()
        if (typeof playerWinner !== 'boolean') setTopMessage(`El último ganador ha sido el <strong>${playerWinner.getBoxSymbol()}</strong>`)
        if (checkDraw) setTopMessage(`El último juego ha acabado en <strong>empate</strong>`)

        if (playerWinner !== false || checkDraw !== false) {
            setShowConfetti(true)
            setTimeout(() => {
                setShowConfetti(false)
            }, 2000)
            return true
        }
        return false
    }

    return  <GameScenario>
                {showConfetti && <Confetti width={1920} height={1080} />}
                <Title dangerouslySetInnerHTML={{__html: topMessage}}></Title>
                <ScoreBoard players={gamePlayers}/>
                <BoardComponent setPlayers={(players) => setPlayers(players)} isGameOver={(board) => isGameOver(board)} />
            </GameScenario>
}
