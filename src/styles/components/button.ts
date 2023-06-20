import { styled } from '..'

export const Cart = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  padding: '0.75rem',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',

  svg: {
    color: '$white'
  },

  '&:hover': {
    opacity: 0.8,
  },
  variants: {
    background: {
      gray: {
        backgroundColor: '$gray800',
        svg: {
          color: '$icon'
        }
      },
      green: {
        backgroundColor: '$green500',
      }
    }
  }
})