import { BoxWithStatus } from '../../box/application/set-box-status'
import { Box } from '../../box/domain/box'
import { Player } from '../../player/domain/player'
import { BoardActions } from '../domain/board'

export class Board implements BoardActions {
    constructor(private readonly boxQuantity: number, private readonly winnerCombination: number[][]) {}
    players: Player[] = []
    boxes: Box[] = []

    createBoard(): Box[] {
        for (let i = 0; i < this.boxQuantity; i++) {
            this.boxes.push(new BoxWithStatus())
        }
        return this.boxes
    }

    setPlayers(player: Player): void {
        this.players.push(player)
    }

    checkWinner(): Player | boolean {
        let isPlayerWinner: Player | boolean = false
        this.players.forEach(player => {
            this.winnerCombination.forEach(eachCombination => {
                let counter = 0
                eachCombination.forEach(value => {
                    if (this.boxes[value].status === player.getBoxSymbol()) counter++
                })
                if (counter === 3) {
                    isPlayerWinner = player
                    player.setWins()
                }
            })
        })
        return isPlayerWinner
    }

    checkDraw(): boolean {
        const checkGameDraws = this.boxes.every(box => box.status !== '')
        if (checkGameDraws) {
            this.players.forEach((player) => {
                player.setDraws()
            })
        }
        return checkGameDraws
    }

    resetBoard() {
        this.boxes = []
    }
}
