import { CSSProperties } from 'react'
import { CommonStyle } from './_types'

export class WebSheet {
  static create<T extends CommonStyle>(
    commonStyle: T,
  ): Record<string, CSSProperties> {
    return commonStyle as unknown as Record<string, CSSProperties>
  }
}