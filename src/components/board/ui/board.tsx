import React, { useEffect } from 'react'
import { useState } from 'react';
import { Board } from '../application/board';
import { Box } from '../../box/domain/box';
import { BoxComponent } from '../../box/ui/box';
import { PlayerUtilities } from '../../player/application/player-utilities';
import { Player } from '../../player/domain/player';
import { BoardContainer } from './assets/styles';
import { BoardActions } from '../domain/board';

interface BoardProps {
    isGameOver: Function
    setPlayers: Function
}

const winnerCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const BoardComponent: React.FC<BoardProps> = ({ isGameOver, setPlayers }) => {
    const [board, setBoard] = useState<BoardActions>()
    const [boxes, setBoxes] = useState<Box[]>()
    const [player1, setPlayer1] = useState<Player>()
    const [player2, setPlayer2] = useState<Player>()
    const [currentPlayer, setCurrentPlayer] = useState<Player>()

    useEffect(() => {
        const boardStart:BoardActions = new Board(9, winnerCombination)
        const player1Initialize:Player = new PlayerUtilities('o')
        const player2Initialize:Player = new PlayerUtilities('x')

        setBoard(boardStart)
        setBoxes(boardStart.createBoard())
        setPlayer1(player1Initialize)
        setPlayer2(player2Initialize)
        setCurrentPlayer(player1Initialize)
        boardStart.setPlayers(player1Initialize)
        boardStart.setPlayers(player2Initialize)
        setPlayers([player1Initialize, player2Initialize])
    }, [])
    
    const changeButtonValue = (box: Box) => {
        if (currentPlayer) {
            if (box.status === '') {
                box.setStatus(currentPlayer.getBoxSymbol())
                setCurrentPlayer(currentPlayer === player1 ? player2 : player1)
            }
        }
        checkRestartGame()
    }

    const checkRestartGame = () => {
        if (isGameOver(board)) {
            setTimeout(() => {
                board?.resetBoard()
                setBoxes(board?.createBoard())
                setCurrentPlayer(player1)
            }, 1000);
        }
    }

    
    return  <BoardContainer>
                {
                    boxes && boxes.map((box, index) => {
                        return <BoxComponent key={`box-${index}`} buttonAction={() => changeButtonValue(box)} boxRef={box} />
                    })
                }
            </BoardContainer>
}
