import { styled } from '..'

export const CircleLength = styled('div',{
  position: 'absolute',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  top: -10,
  right: -10,
  width: 'calc(24px - 3px)',
  height: 'calc(24px - 3px)',
  borderRadius: '50%',
  backgroundColor: '$green500',

  border: '3px solid rgba(0,0,0,0.8)'
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})