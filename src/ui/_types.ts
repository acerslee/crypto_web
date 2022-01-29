import { CSSProperties } from 'react'

export type CommonStyle = Record<string, CommonSheet<unknown>>

export type CommonSheet<T extends unknown> = Exclude<T, CSSProperties>
