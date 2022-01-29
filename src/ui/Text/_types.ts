import { ReactNode } from "react"

interface SharedProps {
    children: ReactNode
    size?: 1 | 2 | 3 | 4 | 5
    type?: 'normal' | 'bold'
    error?: boolean
}

export interface TextProps extends SharedProps {
    children: ReactNode
}