import { createDynamicStyle } from "../createDynamicStyle"
import { TextStyle } from "./_types"
import { StyleProps } from "./_types"

export function buildStyle(props: StyleProps): TextStyle {
  const size = props.size ?? 5
  const alignment = props.align ?? 'left'

  const variants = {
    // Sizes (fontSize MUST come before lineHeight)
    1: {
      fontSize: '22px',
      lineHeight: '28px',
    },
    2: {
      fontSize: '20px',
      lineHeight: '26px'
    },
    3: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    4: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    5: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    6: {
      fontSize: '12px',
      lineHeight: '18px',
    },
    // text alignment
    center: {
      textAlign: 'center',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    justify: {
      textAlign: 'justify',
    },
  }

  const overrideColor = props.color ? { color: props.color } : {}

  return createDynamicStyle({
    text: {
      ...variants[size],
      ...variants[alignment],
      ...overrideColor,
    },
  })
}
