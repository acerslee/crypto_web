import React, { FC } from 'react'
import { TextProps } from './_types'

const BodyText:FC<TextProps> = ({ children }) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default BodyText