import React, { FC } from 'react'
import { TextProps } from './_types'

const HeaderText:FC<TextProps> = ({ children }) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default HeaderText