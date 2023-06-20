import Head from 'next/head'
import Image from 'next/image'
import type { GetStaticProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from '@phosphor-icons/react'

import { Details, HomeContainer, Product } from '@/styles/pages/home'
import { Cart } from '@/styles/components/button'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Product
            key={product.id}
            href={`/product/${product.id}`}
            className="keen-slider__slide"
            prefetch={false}
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt=""
            />

            <footer>
              <Details>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </Details>

              <Cart background="green">
                <Handbag size={24} weight="bold" />
              </Cart>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = res.data.map(product => {
    const price = product.default_price as Stripe.Price

    const priceToBRL = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceToBRL,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
