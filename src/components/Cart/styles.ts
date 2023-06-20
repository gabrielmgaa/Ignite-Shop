import { styled } from '../../styles/index'

import * as Dialog from '@radix-ui/react-dialog'

export const DialogTrigger = styled(Dialog.Trigger, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  backgroundColor: '$gray800',

  svg: {
    color: '$icon'
  },

  '&:hover': {
    opacity: 0.8,
  },

  span: {
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    width: "1.25rem",
    height: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    position: "absolute",
    top: "calc(-1rem / 2)",
    right: "calc(-1em / 2)",
    outline: "3px solid $gray900",
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
})

export const DialogContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  top: 0,
  right: 0,
  width: '420px',
  padding: '2rem',
  height: '100vh',
  backgroundColor: '$gray800',
})

export const DialogClose = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  lineHeight: 0,
  color: '$icon',
  border: 0,
  cursor: 'pointer',
  alignSelf: 'flex-end'
})

export const Products = styled('div', {
  marginTop: '2rem',
  minHeight: '600px'
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  gap: '1rem',
})

export const Image = styled('div', {
  display: 'flex',
  overflow: 'hidden',

  gap: '1rem',
})

export const BackgroundImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.5rem',
  borderRadius: 6,

  img: {
    objectFit: 'cover'
  }
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  fontWeight: 'bold',

  'span:first-child': {
    color: '$gray300',
    fontWeight: 'lighter'
  },

  button: {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500'
  }
})

export const Order = styled('div', {
  button: {
    width: '100%',
    padding: '1.25rem 2rem',
    fontWeight: 'bold',
    backgroundColor: '$green300',
    border: 0,
    borderRadius: 8,
    fontSize: '1.125rem',
    color: '$white',
    marginTop: '3rem',
  },

  'button:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  'button:not(:disabled):hover':{
    backgroundColor: '$green500',
    cursor: 'pointer'
  }
})

export const Quantity = styled('div',{
  display: 'flex',
  justifyContent: 'space-between',
})

export const Value = styled('span',{
  fontSize: '1.125rem',
  fontWeight: 'bold',
})