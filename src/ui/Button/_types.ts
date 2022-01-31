import { ReactNode } from 'react'
import { CommonSheet, CommonStyle } from '../_types'

interface SharedProps {
    size?: 'large' | 'medium' | 'small'
    type?: 'primary' | 'secondary'
    disabled?: boolean
}

export interface ButtonProps extends SharedProps {
    onClick?(): void
    onHover?(): void
    loading?: boolean
    hover?: boolean
    label?: string
    children?: ReactNode
}

export type StyleProps = SharedProps
export interface ButtonStyle extends CommonStyle {
    button: CommonSheet<unknown>
    label: CommonSheet<unknown>
}