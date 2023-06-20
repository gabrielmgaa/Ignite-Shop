
import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'

import { CartContextProvider } from '@/contexts/CartContext'

import { SkeletonTheme } from 'react-loading-skeleton'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'


globalStyles();
export default function App({ Component, pageProps }: AppProps) {


  // const cartLenght = cart.reduce((acc,cur) => (acc + cur.amount), 0)

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Container>
        <CartContextProvider>
          <Header />
     
          <Component {...pageProps} />
        </CartContextProvider>
      </Container>
    </SkeletonTheme>
  )
}
