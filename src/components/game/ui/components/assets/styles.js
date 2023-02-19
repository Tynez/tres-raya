import styled from 'styled-components'

export const ScoreBoardContainer = styled.div`
        width: 600px;
    margin: 0 auto;
    text-align: center;
    background: #fff;
    border: 4px solid #36a3a9;
    margin-bottom: 50px;
    border-left: 0px;
    border-right: 0px;
    padding: 10px 0px;
`

export const Line = styled.div`
    color: ${props => props.symbol === "x" ? "#81c6e1" : "#90d37f"};
`
