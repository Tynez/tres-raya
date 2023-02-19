import styled from 'styled-components'

export const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 600px;
    margin: 0 auto;
    height: 600px;
    & button:nth-child(1) {
        border-top: 0px;
        border-left: 0px
    }
    & button:nth-child(2) {
        border-top: 0px;
    }
    & button:nth-child(3) {
        border-top: 0px;
        border-right: 0px;
    }
    & button:nth-child(4) {
        border-left: 0px;
    }
    & button:nth-child(6) {
        border-right: 0px;
    }
    & button:nth-child(7) {
        border-bottom: 0px;
        border-left: 0px;
    }
    & button:nth-child(8) {
        border-bottom: 0px;
    }
    & button:nth-child(9) {
        border-bottom: 0px;
        border-right: 0px;
    }
`
