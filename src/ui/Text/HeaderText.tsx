import React, { FC } from 'react'
import { TextProps } from './_types'
import { buildStyle } from './styles'
import { WebSheet } from '../utility'

const HeaderText:FC<TextProps> = props => {
    const style = WebSheet.create(buildStyle({ ...props }))

    return(
        <div style={style.text}>
            {props.children}
        </div>
    )
}

export default HeaderText
