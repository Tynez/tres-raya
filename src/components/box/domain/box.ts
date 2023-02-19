import { BoxStatus } from './box-status'

export interface Box {
    status: BoxStatus
    setStatus(status: BoxStatus): boolean
}
