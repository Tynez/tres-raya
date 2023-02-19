import styled from 'styled-components'

export const BoxButton = styled.button`
    border-radius: 0px;
    width: 200px;
    height: 200px;
    outline: none !important;
    border: none;
    font-family: 'Mynerve';
    font-size: 190px;
    padding: 0px;
    line-height: 190px;
    background-color: transparent;
    border: 10px solid #b7eee1;
    color: ${props => props.symbol === "x" ? "#81c6e1" : "#90d37f"};
    background: rgb(255 255 255 / 90%);
    &:hover {
        border-color: #b7eee1;
    }
`