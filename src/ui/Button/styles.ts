import { createDynamicStyle } from "../createDynamicStyle"
import { ButtonStyle, StyleProps } from "./_types"
import { theme } from "../../styles/theme"

export function buildStyle(props: StyleProps): ButtonStyle {
  const { disabled, hover, type } = props
  const size = props.size ?? 'large'
  const isSmall = props.size == 'small'

  const getColors = (type: string | undefined): {
    border: string,
    backgroundColor: string,
    label: string
  } => {
    switch(type) {
      case 'primary':
        return {
          border: hover ? theme.color.secondary : theme.color.primary,
          backgroundColor: hover ? theme.color.secondary : theme.color.primary,
          label: theme.color.white,
        }
      case 'secondary':
        return {
          border: hover ? theme.color.secondary : theme.color.primary,
          backgroundColor: 'transparent',
          label: hover ? theme.color.secondary : theme.color.primary,
        }
      default:
        return getColors('primary')
    }
  }

  const variant = {
    large: {
      height: '65px',
    },
    medium: {
      height: '55px',
    },
    small: {
      height: '45px',
    },
  }

  const colors = getColors(type)

  return createDynamicStyle({
    button: {
      ...variant[size],
      backgroundColor: colors.backgroundColor,
      borderColor: colors.border,
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disabled ? 0.5 : 1,
      borderRadius: 8,
    },
    label: {
      colors: colors.label,
      fontSize: isSmall ? 16 : 18,
    },
  })
}