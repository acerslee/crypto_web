import { createDynamicStyle } from "../createDynamicStyle"
import { ButtonStyle, StyleProps } from "./_types"
import { theme } from "../../styles/theme"

export function buildStyle(props: StyleProps): ButtonStyle {
  const size = props.size ?? 'large'
  const isSmall = props.size == 'small'

  const getColors = (type: string | undefined) => {
    switch(type) {
      case 'primary':
        return {
          backgroundColor: theme.color.primary,
          label: theme.color.white,
        }
      case 'secondary':
        return {
          backgroundColor: theme.color.secondary,
          label: theme.color.white,
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

  const colors = getColors(props.type)

  return createDynamicStyle({
    button: {
      ...variant[size],
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: props.disabled ? 0.5 : 1,
      borderRadius: 8,
    },
    label: {
      colors: theme.color.white,
      fontSize: isSmall ? 16 : 18,
    }
  })

}