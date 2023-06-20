import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Cart = styled('div', {

  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  cursor: 'pointer',

  svg: {
    color: '$icon'
  }
})