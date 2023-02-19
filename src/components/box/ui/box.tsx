import React, { useEffect, useState } from 'react'
import { BoxButton } from './assets/styles'
import { Box } from '../domain/box'
import { BoxStatus } from '../domain/box-status';

interface BoxProps {
    boxRef: Box
    buttonAction: Function
}

export const BoxComponent: React.FC<BoxProps> = ({ buttonAction, boxRef }) => {
    const [buttonValue, setButtonValue] = useState<BoxStatus>('')

    useEffect(() => {
        setButtonValue(boxRef.status)
    }, [boxRef.status])
    
    return <BoxButton symbol={buttonValue} onClick={() => buttonAction() }>{ buttonValue }</BoxButton>
}
