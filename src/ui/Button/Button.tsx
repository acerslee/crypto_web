import React, { FC, useState } from 'react'
import { WebSheet } from '../utility'
import { buildStyle } from './styles'
import { ButtonProps } from './_types'

const Button:FC<ButtonProps> = props => {
    const { label, children, onClick, disabled } = props

    const [ hover, setHover ] = useState<boolean>(false)

    const styles = WebSheet.create(
        buildStyle({
            ...props,
            hover
        })
    )

    return(
        <>
            <button
                style={styles.button}
                disabled={disabled}
                onClick={onClick}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                {label ? <span style={styles.label}>{label}</span> : children}
            </button>
        </>
    )
}

export default Button
