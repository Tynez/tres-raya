import { Box } from '../../box/domain/box'
import { Player } from '../../player/domain/player'

export interface BoardActions {
    boxes: Box[]
    players: Player[]
    setPlayers(player: Player): void
    createBoard(): Box[]
    checkWinner(): Player | boolean
    checkDraw(): boolean
    resetBoard(): void
}
