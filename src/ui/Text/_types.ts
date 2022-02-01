import { ReactNode } from "react"
import { CommonSheet, CommonStyle } from '../_types'

interface SharedProps {
    textType: 'body' | 'header'
    size?: 1 | 2 | 3 | 4 | 5
    type?: 'normal' | 'bold'
    align?: 'left' | 'right' | 'center' | 'justify'
    color?: string
    error?: boolean
}

export interface TextProps extends SharedProps {
    children: ReactNode
}

export type StyleProps = SharedProps

export interface TextStyle extends CommonStyle {
    text: CommonSheet<unknown>
}
