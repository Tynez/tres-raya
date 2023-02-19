import { Box } from '../domain/box'
import { BoxStatus } from '../domain/box-status'

export class BoxWithStatus implements Box {
    status: BoxStatus = ''

    constructor() {}

    setStatus(boxStatus: BoxStatus): boolean {
        if (this.status === '' && boxStatus) {
            this.status = boxStatus
            return true
        }
        return false
    }
}
